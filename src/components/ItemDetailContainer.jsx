import { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { dataBase } from '../firebase/config'

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState (null)
    const [error, setError] = useState(null)
    const {id} = useParams();


    useEffect (() =>{
        const docRef = doc (dataBase, "productos", id)
        getDoc(docRef).then((resp) =>{
            setProducto({...resp.data(), id:resp.id});
        }).catch((err) => {
            setError("Ocurrió un error al obtener el producto");
            console.error(err); 
        });
    }, [id])


    return (
    <>
        {error ?  ({error}) : producto && <ItemDetail producto={producto}/> }
    </>
    )
}

