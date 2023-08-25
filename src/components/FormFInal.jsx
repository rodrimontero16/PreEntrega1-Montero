import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export default function FormFInal() {
    const {total, datos, handleDatos} = useContext(CartContext)



    return (
        <>
            <div className='formContainer'>
                <div className="form-floating">
                    <input 
                        className="form-control" 
                        placeholder="Ingrese su nombre" 
                        id="formNombre"
                        type='text'
                        value={datos.nombre}
                        onChange={handleDatos}
                        name='nombre'/>
                    <label htmlFor="formNombre">Nombre</label>
                </div>
                <div className="form-floating">
                    <input 
                        className="form-control" 
                        placeholder="Ingrese su apellido" 
                        id="formApellido"
                        type='text'
                        value={datos.apellido}
                        onChange={handleDatos}
                        name='apellido'/>
                    <label htmlFor="formApellido">Apellido</label>
                </div>
                <div className="form-floating">
                    <input 
                        className="form-control" 
                        placeholder="Ingrese su e-mail" 
                        id="formEmail"
                        type='email'
                        value={datos.email}
                        onChange={handleDatos}
                        name='email'/>
                    <label htmlFor="formEmail">Correo electronico</label>
                </div>
            </div>
            <div>
                <h4 className="totalModal">El total de tu compra es: USD {total()}</h4>
            </div>
        </>
    )
}
