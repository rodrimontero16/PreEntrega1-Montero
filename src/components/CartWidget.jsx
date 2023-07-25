import cartLogo from '../assets/cart.svg';

export const CartWidget = () => {
    return (
        <>
            <img src={cartLogo} alt="cartLogo" className='cartLogo'/>
            <span className='contador'>5</span>
        </>

    );

};

//El contador tiene que ser una variable