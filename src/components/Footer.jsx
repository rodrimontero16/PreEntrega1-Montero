import React from 'react'
import instagramLogo from '../assets/instagram.svg'
import twitterLogo from '../assets/twitter.svg'
import whatsappLogo from '../assets/whatsapp.svg'
import locationLogo from '../assets/location.svg'
import { useLocation } from 'react-router-dom'


export default function Footer() {

    const location = useLocation()

    return (
        <>
            {location.pathname === '/' ? (
                <span />
                ) : (
                <footer className='footerContainer'>
                    <div className='footerInfo'>
                        <div className='footerUbicacion'>
                            <img src={locationLogo} alt="location"/>
                            <p>Córdoba, Córdoba-Argentina</p>
                        </div>
                        <p className='footerDerechos'>Todos los derechos reservados.</p>
                    </div>
                    <div className='footerRedes'>
                        <div className="socialRed">
                            <img src={instagramLogo} alt="instagram"/>
                        </div>
                        <div className="socialRed">
                            <img src={twitterLogo} alt="twitter"/>
                        </div>
                        <div className="socialRed">
                            <img src={whatsappLogo} alt="whatsapp"/>
                        </div>
                    </div>
                </footer>
            )}
        </>
    )     
}
