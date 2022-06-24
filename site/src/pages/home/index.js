import {Link} from 'react-router-dom'

export default function Index(){
    return(
        <div className='HOME'>
            <Link to='/cadastrar'>cadastrar</Link>
            <Link to='/consultar'>consultar</Link>
        </div>
    )
}