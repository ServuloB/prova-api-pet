import {Link} from 'react-router-dom'

export default function Index(){
    return(
        <div className='HOME'>
        
        <h1>Menu</h1>
        <ul>
            <li> <Link to='/Cadastrar'>cadastrar</Link></li> 
            <li><Link to='/Consultar'>consultar</Link></li> 
        </ul>
        </div>
    )
}