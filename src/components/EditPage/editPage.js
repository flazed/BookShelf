import { Form } from './../form/form';

export const EditPage = () => {

    return (
        <>
            <h1>Редактирование книги</h1>
            <hr />
            <Form isEdit={true}/>
        </>
    )
}