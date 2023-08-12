import { useEffect , useState } from "react";
import { ItemList } from './ItemList';
import { pedirData } from "../function/pedirData";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({incrementarContador}) => { 
    
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState('TIENDA');
    const category = useParams().category;


    useEffect (() =>{
        pedirData().then((res) =>{
        if (category) {
            const categoryFilter = res.filter((prod) => prod.category === category);
            setProductos(categoryFilter);
            setTitulo(category);
            console.log(categoryFilter)
        } else{
            setProductos(res)
            setTitulo('TIENDA')
        }
        })
    }, [category]);



    return (
        <>
            <ItemList incrementarContador={incrementarContador} productos={productos} titulo={titulo}/>
        </>
    );
};
