import { useState } from "react";

function useContador(valorInicial) {
    const [cantidad, setCantidad] = useState(valorInicial);

    const incrementar = () => {
        setCantidad (cantidad + 1);
    }

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad (cantidad - 1);
        } 
        // else if (cantidad = 1){
        //     eliminarProds() 
        // }
    }
}

export default useContador