import { Routes, Route } from 'react-router-dom'
import { AddPage } from './components/AddPage/addPage'
import { EditPage } from './components/EditPage/editPage'
import { MainPage } from './components/MainPage/mainPage'

export const Routing = () => {
    return (
        <Routes> 
            <Route exact path="/" element={<MainPage/>}/>
            <Route exact path="/add" element={<AddPage/>}/>
            <Route exact path="/edit" element={<EditPage/>}/>
        </Routes>
    )    
}