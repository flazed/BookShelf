import { useContext } from "react"
import { Link } from "react-router-dom";
import { BookContext } from "../../contexts/book/book.context";
import empty from './../../static/empty-bookshelf.png'
import './mainPage.scss'

export const MainPage = () => {
    const bookContext = useContext(BookContext);

    return (
        <>
            <h1>Ваша книжная полка</h1>
            <hr />
            <Link to="/add" className="btn btn-primary">Добавить книгу</Link>
            <div className="books">
            {   
                bookContext.books.length ?
                bookContext.books.map(book => {
                    return (
                        <div className='book' key={Math.random()+book.id}>
                            <div className="book_preview">
                            {
                                !!book.img && <img src={book.img} alt={book.name} />
                            }                                
                            </div>
                            <div className="book_info">
                                <b>{book.name}</b>
                                <span>{book.author}</span>
                                <span>{book.release} г.</span>
                            </div>
                            <div className="book_controls">
                                <button className="btn btn-edit" onClick={() => bookContext.editPageBook(book)}>Редактировать</button>
                                <button className="btn btn-delete" onClick={() => bookContext.deleteBook(book.id)}>Удалить</button>
                            </div>
                        </div>
                    )
                }) :
                <div className="empty">
                    <img src={empty} alt="Пустой книжный ящик" />
                    <span>Полка пока пуста!</span>
                </div>
            }                
            </div>
        </>
    )
}