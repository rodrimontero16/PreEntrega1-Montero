import data from "../data/data.json"

export const pedirData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout ( () =>{
            resolve(data);
        }, 500);
    });
}

export const pedirProducto = (id) =>{
    return new Promise ((resolve, reject) => {
        const producto = data.find((prod) => prod.id === id);

        if (producto) {
            resolve(producto)
        } else {
            reject({
                error: 'No se encontro el producto'
            })
        }
    })
}