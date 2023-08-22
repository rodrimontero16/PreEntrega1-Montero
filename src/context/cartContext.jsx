import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ModalFinalizar } from "../components/ModalFinalizar";
import { Button } from "react-bootstrap";

export const CartContext = createContext();

//Guardar carrito en local storage
const carritoEnLS = JSON.parse(localStorage.getItem('carrito')) || [];

export const CartProvider = ({children}) =>{
    //Logica para el carrito
    const [carrito, setCarrito] = useState(carritoEnLS)
    const [cartTitle, setCartTitle] = useState('');

    const agregarAlCarrito = (product) => {
        const prodAgregado = {...product, cantidad}
        const nuevoCarrito = [...carrito]
        const prodExistente = nuevoCarrito.find ((prod) => prod.id === prodAgregado.id)

        if (prodExistente) {
        prodExistente.cantidad += cantidad;
        setCarrito(nuevoCarrito);
        } 
        else {setCarrito([...carrito, prodAgregado])}

        setCartTitle('Carrito')

        Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        }).fire({
        icon: 'success',
        title: `Producto agregado`
        });        
    };

    useEffect (() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito]);


    //Logica de cantidad
    const [cantidad, setCantidad] = useState(1);

    const incrementarCantidad = (productId) => {
        const producto = carrito.find((prod) => prod.id === productId);
        if (producto) {
        producto.cantidad++;
        setCarrito([...carrito]);
        }
    };

    const decrementarCantidad = (productId) => {
        const producto = carrito.find((prod) => prod.id === productId);
        if (producto && producto.cantidad > 1) {
        producto.cantidad--;
        setCarrito([...carrito]);
        }
    };

    //Cantidad en carrito
    const cantidadEnCarrito = () => {
        return carrito.reduce((acumulador, prod) => acumulador + prod.cantidad, 0 )
    };

    // Funcion del total de compra
    const total = () => {
        return (carrito.reduce((acumulador, prod) => acumulador + (prod.price*prod.cantidad), 0 ))
    }

    //Total de la compra
    const totalCompra = () => {
        const [modalShow, setModalShow] = useState(false);
        if (carrito.length > 0){
        return (
            <>
                <h1>El total de tu compra es: USD {total()}</h1>
                <div className="finalizarCompra">
                    <button type="button" className="btn btn-outline-danger" onClick={vaciarCarrito}>Vaciar</button>
                    <Button variant="btn btn-outline-success" onClick={() => setModalShow(true)}>Finalizar compra</Button>
                    <ModalFinalizar show={modalShow} onHide={() => setModalShow(false)}/>
                </div>
            </>
        )
        } else {
        return <h1 className='cartVacio'>El carrito esta vacio</h1>
        }
    };
    

    //Vaciar carrito
    const vaciarCarrito = () =>{
        setCarrito([])
        setCartTitle('')
    }

    return (
        <CartContext.Provider value= {{carrito, agregarAlCarrito, incrementarCantidad, decrementarCantidad, cantidadEnCarrito, totalCompra, vaciarCarrito, cartTitle, total}}>
            {children}
        </CartContext.Provider>
    );
}
