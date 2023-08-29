import { Link } from "react-router-dom"

export const Home = () =>{
    return(  
    <div className="homePage">
        <Link to='/tienda'>
            <button type="button" class="btn btn-outline-light irTienda">Ir a la tienda</button>
        </Link>
        <img src="/fondo.jpg" alt="fondo" className="fondoHome" />
    </div> 
    )
} ;