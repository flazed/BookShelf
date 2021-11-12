import classNames from "classnames";
import { useContext } from "react"
import { BookContext } from "../../contexts/book/book.context";
import './form.scss'

export const Form = ({isEdit}) => {
    const bookContext = useContext(BookContext);

    return (
        <div className="form">
            <div className="form_inputs">
                <input 
                    className={classNames({'invalid': !bookContext.inputsStatus.author})}
                    type="text"
                    placeholder="Автор"
                    value={bookContext.inputs.author}
                    onChange={(e) => bookContext.onChangeInput(e, 'author')}
                />
                <input 
                    className={classNames({'invalid': !bookContext.inputsStatus.name})}
                    type="text"
                    placeholder="Название"
                    value={bookContext.inputs.name}
                    onChange={(e) => bookContext.onChangeInput(e, 'name')}
                />
                <input 
                    className={classNames({'invalid': !bookContext.inputsStatus.release})}
                    type="number" min="0" max="2017"
                    placeholder="Год выпуска"
                    value={bookContext.inputs.release}
                    onChange={(e) => bookContext.onChangeInput(e, 'release')}
                />
                <input
                    type="text"
                    placeholder="Изображение"
                    value={bookContext.inputs.img}
                    onChange={(e) => bookContext.onChangeInput(e, 'img')}
                />
            </div>
            <div className="form_controls">
                {
                    isEdit ?
                    <button className="btn btn-primary" onClick={bookContext.editBook}>Изменить</button> :
                    <button className="btn btn-primary" onClick={bookContext.addBook}>Сохранить</button>
                }
                
                <button className="btn btn-cancel" onClick={bookContext.goBack}>Отменить</button>
            </div>
        </div>
    )
}