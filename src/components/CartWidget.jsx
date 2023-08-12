import cartLogo from '../assets/cart.svg';

export const CartWidget = ({contador}) => { 
    
    return (
        <>
            <img src={cartLogo} alt="cartLogo" className='cartLogo'/>
            <span className='contador'>{contador}</span>
        </>
    );

};