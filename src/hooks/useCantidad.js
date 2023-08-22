import { useState } from "react";

function useCantidad (valorInicial) {
    const [cantidad, setCantidad] = useState(valorInicial)

    const incrementarCantidad = () => {
    setCantidad (cantidad + 1)
    }

    const decrementarCantidad = () => {
    cantidad > 1 && setCantidad ( cantidad - 1);
    }

    return {cantidad, incrementarCantidad, decrementarCantidad};
}

export default useCantidad