import Swal from 'sweetalert2';
import { useState } from "react";

function useContador (valorInicial) {
    const [contador, setContador] = useState(valorInicial)

    const incrementarContador = () => {
    setContador (contador + 1)

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
    
    }

    const decrementarContador = () => {
    setContador (contador - 1);
    }

    return {contador, incrementarContador, decrementarContador};
}

export default useContador