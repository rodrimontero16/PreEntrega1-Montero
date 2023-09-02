import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ModalFinalizar } from "../components/ModalFinalizar";
import { Button } from "react-bootstrap";
import {collection, addDoc} from 'firebase/firestore';
import { dataBase } from "../firebase/config";

export const CartContext = createContext();

//Recuperar carrito en local storage
const carritoEnLS = JSON.parse(localStorage.getItem('carrito')) || [];

//Creo un componente para pasar todas las funciones y variables por context
export const CartProvider = ({children}) =>{
    //Logica para el carrito
    const [carrito, setCarrito] = useState(carritoEnLS)
    const [cartTitle, setCartTitle] = useState('');

    //Actualizo el carrito en LS cada vez que cambia
    useEffect (() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito]);

    //Logica de cantidad en carrito
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
        } else if (producto && (producto.cantidad = 1)){
            eliminarProducto(producto);
        }
    };

    //Muestro la cantidad de productos que existen en el carrito en el widget
    const cantidadEnCarrito = () => {
        return carrito.reduce((acumulador, prod) => acumulador + prod.cantidad, 0 )
    };

    //Agregar al carrito
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
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
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

    //Eliminar producto
    const eliminarProducto = (prod) =>{
        const index = carrito.findIndex(prodAEliminar => prodAEliminar.id === prod.id)
        if (index > -1) {
            const nuevoCarrito = [...carrito];
            nuevoCarrito.splice(index, 1);
            {(nuevoCarrito.length === 0) ? setCartTitle('') || setCarrito(nuevoCarrito) : setCarrito(nuevoCarrito)}
        }
        Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
            }).fire({
            icon: 'error',
            title: `Producto eliminado`
            });   
    }

    // Valor total de la compra
    const total = () => {
        return (carrito.reduce((acumulador, prod) => acumulador + (prod.price*prod.cantidad), 0 ))
    }

    //Mostrar el total de la compra
    const totalCompra = () => {
        const [modalShow, setModalShow] = useState(false);
        if (carrito.length > 0){
        return (
            <>
                <div className="cartDetalle">
                    <h1 className="detalleTotal">El total de tu compra es: USD {total()}</h1>
                    <button type="button" className="btn btn-outline-danger btnVaciar" onClick={vaciarCarrito}>Vaciar</button>
                </div>
                
                <div className="finalizarCompra">
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

    //Formulario de finalizacion
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '', 
        email: ''
    })

    //Cambio en los datos
    const handleDatos = (evento) => {
        setDatos({
            ...datos,
            [evento.target.name]: evento.target.value
        })
    }

    //Orden generada
    const [ordenID, setOrdenID] = useState('')

    const handleConfirmar = () => {
        const orden = {
            cliente: datos,
            productos: carrito,
            'total USD': total()
        }
        console.log(orden);

        const ordenRef = collection(dataBase, 'ordenes');
        addDoc(ordenRef, orden).then((doc) => {
            setOrdenID(doc.id)
        });

        vaciarCarrito();
    }

    return (
        <CartContext.Provider value= {{carrito, agregarAlCarrito, incrementarCantidad, decrementarCantidad, cantidadEnCarrito, totalCompra, vaciarCarrito, cartTitle, total, eliminarProducto, datos, handleDatos, handleConfirmar, ordenID}}>
            {children}
        </CartContext.Provider>
    );
}
