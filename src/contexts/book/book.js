import { useState, useEffect } from "react";
import { BookContext } from "./book.context";
import { useNavigate } from 'react-router-dom';

export const Book = ({children}) => {
    const navigate = useNavigate();

    // STATES

    const [books, setBooks] = useState([]);

    const [inputs, setInputs] = useState({
        author: '',
        name: '',
        release: 0,
        img: ''
    })

    const [inputsStatus, setInputsStatus] = useState({
        author: true,
        name: true,
        release: true
    })

    const [editID, setEditID] = useState(0);

    // INPUTS

    const onChangeInput = (e, field) => {
        setInputs({...inputs, [field]: e.target.value})
        setInputsStatus({...inputsStatus, [field]: !!e.target.value})
    }

    const checkInputs = () => {
        setInputsStatus({author: !!inputs.author,
                         name: !!inputs.name,
                         release: !!inputs.release})

        if(!!inputs.author && !!inputs.name && !!inputs.release) {
            return true
        } else {
            return false
        }
    }

    // BOOKS

    const addBook = () => {
        if(checkInputs()) {
            setBooks([...books, {id: Math.random(), ...inputs}])
            goBack();
        }
    }

    const editPageBook = (book) => {
        setEditID(book.id);
        setInputs({
            author: book.author,
            name: book.name,
            release: book.release,
            img: book.img
        })
        navigate('/edit');
    }

    const editBook = () => {
        if(checkInputs()) {
            setBooks(books.map(book => book.id === editID ? {...book, ...inputs} : book))
            goBack();
        }
    }

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    const goBack = () => {
        setInputs({
            author: '',
            name: '',
            release: 0,
            img: ''
        })
        setInputsStatus({
            author: true,
            name: true,
            release: true
        })
        navigate('/')
    }

    useEffect(() => {
        if(inputs.release > 2017) {
            setInputs({...inputs, release: 2017})
        } else if(inputs.release < 0) {
            setInputs({...inputs, release: 0})
        }
    }, [inputs.release])

    return (
        <BookContext.Provider value={{
            books,
            addBook,
            editPageBook,
            editBook,
            deleteBook,
            inputs,
            inputsStatus,
            onChangeInput,
            goBack
        }}> 
            {children}
        </BookContext.Provider>
    )
}