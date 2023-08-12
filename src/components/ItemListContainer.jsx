import { useEffect , useState } from "react";
import { ItemList } from './ItemList';
import { pedirData } from "../function/pedirData";

export const ItemListContainer = ({incrementarContador}) => { 
    
    const [productos, setProductos] = useState([])
    
    useEffect (() =>{
        pedirData().then((res) =>{
            setProductos(res)
        })
    }, []);

    return (
        <>
        <ItemList incrementarContador = {incrementarContador} productos={productos}/>
        </>
    );
};