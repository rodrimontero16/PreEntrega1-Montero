import { useEffect , useState } from "react";
import { ItemList } from './ItemList';
import { pedirData } from "../function/pedirData";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => { 
    
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState('TIENDA');
    const category = useParams().category;

    // Función para capitalizar la primera letra
    const capitalizarPrimeraLetra = (texto) => {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    };


    useEffect (() =>{
        pedirData().then((res) =>{
        if (category) {
            const categoryFilter = res.filter((prod) => prod.category === category);
            setProductos(categoryFilter);
            setTitulo(`TIENDA - ${capitalizarPrimeraLetra(category)}`);
        } else{
            setProductos(res)
            setTitulo('TIENDA')
        }
        })
    }, [category]);



    return (
        <>
            <ItemList productos={productos} titulo={titulo}/>
        </>
    );
};
