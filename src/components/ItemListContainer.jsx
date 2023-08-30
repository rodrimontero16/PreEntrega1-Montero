import { useEffect , useState } from "react";
import { ItemList } from './ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../firebase/config";

export const ItemListContainer = () => { 
    
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState('TIENDA');
    const {category} = useParams();

    // Función para capitalizar la primera letra
    const capitalizarPrimeraLetra = (texto) => {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    };

    useEffect (() =>{
        const productsRef = collection(dataBase, "productos")
        const filterCategory = category ? query(productsRef, where('category', '==', category)) : productsRef;
        getDocs(filterCategory).then((resp) => {
            setProductos(resp.docs.map((doc) =>{
                return {...doc.data(), id:doc.id}
            }))
            setTitulo(category ? (`TIENDA → ${capitalizarPrimeraLetra(category)}`) : 'TIENDA')
        });
    }, [category]);

    return (
        <>
            <ItemList productos={productos} titulo={titulo}/>
        </>
    );
};
