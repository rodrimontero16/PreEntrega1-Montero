import { Link } from 'react-router-dom';
import appleLogo from '../assets/apple.svg'
import { CartWidget } from './CartWidget';

export const NavBar = ({contador}) => {
    return(
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid">
        <Link to="/">
            <img src={appleLogo} alt="logo" className="logo"/>
        </Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav categorias">
            <li className="nav-item">
            <Link className="nav-link" id='Iphone' to='/tienda/iphone' >Iphone</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" id='Mac' to='/tienda/macbook' >MacBook</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" id='Accesorios' to='/tienda/accesorios'>Accesorios</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/carrito'><CartWidget contador={contador}/></Link>
            </li>
        </ul>
        </div>
        
    </div>
    </nav>
    );
};