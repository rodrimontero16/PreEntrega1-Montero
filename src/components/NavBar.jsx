import appleLogo from '../assets/apple.svg'
import { CartWidget } from './CartWidget';

export const NavBar = ({contador, handleFiltroClick}) => {
    return(
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid">
        <a href="../index.html">
            <img src={appleLogo} alt="logo" className="logo"/>
        </a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav categorias">
            <li className="nav-item">
            <span className="nav-link" id='Iphone' onClick={() => handleFiltroClick('Iphone')}>Iphone</span>
            </li>
            <li className="nav-item">
            <span className="nav-link" id='Mac' onClick={() => handleFiltroClick('MacBook')}>MacBook</span>
            </li>
            <li className="nav-item">
            <span className="nav-link" id='Accesorios' onClick={() => handleFiltroClick('Accesorios')}>Accesorios</span>
            </li>
            <li className="nav-item">
            <span className="nav-link" href="Carrito"><CartWidget contador={contador}/></span>
            </li>
        </ul>
        </div>
        
    </div>
    </nav>
    );
};