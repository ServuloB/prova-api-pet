import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Cadastrar from './pages/Cadastrar/index.js'
import Consultar from './pages/consulta/index.js'

export default function SiteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Cadastrar' element={ <Cadastrar/>} />
                <Route path='/Consultar' element={ <Consultar/>}  />
            </Routes>
        </BrowserRouter>
    )
}