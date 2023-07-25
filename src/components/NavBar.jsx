import appleLogo from '../assets/apple.svg'
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return(
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid">
        <a href="#">
            <img src={appleLogo} alt="logo" className="logo"/>
        </a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav categorias">
            <li className="nav-item">
            <a className="nav-link" href="#">Iphone</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Mac</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Accesorios</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><CartWidget/></a>
            </li>
        </ul>
        </div>
        
    </div>
    </nav>
    );
};