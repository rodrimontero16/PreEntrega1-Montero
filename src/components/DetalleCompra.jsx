import { useContext } from "react"
import { CartContext } from "../context/cartContext"

export const DetalleCompra = () => {
    
    const {ordenID} = useContext(CartContext)

    return ( 
        <div className="pageFinal">
            <h1 className="detalleCompra">¡Muchas gracias por tu compra!</h1>
            <h3 className="detalleCompra">El codigo de tu compra es: {ordenID}</h3>
        </div>
    )
}