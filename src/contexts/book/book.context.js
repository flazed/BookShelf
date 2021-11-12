import { createContext } from "react";

export const BookContext = createContext({
    books: {},
    addBook: () => {},
    editPageBook: (book) => {},
    editBook: () => {},
    deleteBook: (id) => {},
    inputs: {},
    inputsStatus: {},
    onChangeInput: (e, field) => {},
    goBack: () => {}
})