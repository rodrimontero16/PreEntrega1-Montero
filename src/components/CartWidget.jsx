import cartLogo from '../assets/cart.svg';

export const CartWidget = () => {
    let contador = 4;
    
    return (
        <>
            <img src={cartLogo} alt="cartLogo" className='cartLogo'/>
            <span className='contador'>{contador}</span>
        </>
    );

};
