import { useContext } from 'react';
import cartLogo from '../assets/cart.svg';
import { CartContext } from '../context/cartContext';

export const CartWidget = () => { 
    
    const {cantidadEnCarrito} = useContext(CartContext);
    
    return (
        <div className='cartWidgetContainer'>
            <img src={cartLogo} alt="cartLogo" className='cartLogo'/>
            <span className='contador'>{cantidadEnCarrito()}</span>
        </div>
    );

};