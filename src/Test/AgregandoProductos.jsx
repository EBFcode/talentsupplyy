import React from 'react'
import './styleAgregarProducto.css';
import {addDoc, collection, getFirestore} from 'firebase/firestore';

export default function AgregandoProductos() {
    

    const [producto, setProducto] = React.useState({
        nombre:'',
        img:'',
        precio:'',
        categoria:'',
        stock:''
    });    

    const handleChanges = ({target: {name, value}}) => setProducto({...producto, [name] : value})

    function handleSubmit(e){ 
        e.preventDefault();
        const db = getFirestore();
        const reference = collection(db, 'productos');
        
        try {
            addDoc(reference, producto).then(({id}) => console.log(id))
            
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
        
            <div className='contenedorForm'>
                <div>
                    <h1 className='titular'>Agrega productos a la base de datos </h1>
                </div>
                <form className='formAgregar' onSubmit={handleSubmit}>
                    <input id='ingresarNombre' name='nombre' type="text" placeholder='Ingresar Nombre' onChange={handleChanges} required/>
                    <input id='ingresarIMG' name='img' type="text" placeholder='Ingresar URL Imagen' onChange={handleChanges} required/>
                    <input id='ingresarPrecio' name='precio' type="number" placeholder='Ingresar Precio' onChange={handleChanges} required/>
                    <input id='ingresarCategoria' name='categoria' type="text" placeholder='Ingresar Categoria' onChange={handleChanges} required/>
                    <input id='ingresarStock' name='stock' type="number" placeholder='Ingresar Stock' onChange={handleChanges} required/>    
                    <button> Agregar </button>
                </form>
            </div>    
            
        </>
        
    )
}
