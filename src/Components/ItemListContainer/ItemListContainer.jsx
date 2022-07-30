import React from 'react'
import './ItemListContainer.css'
import ItemList from './itemList'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

export default function ItemListContainer() {
    const [loading, setLoading] = React.useState(true)
    const [items, setItems] = React.useState([])
    const [item, setItem] = React.useState({})

    let {idCategory} = useParams();

    React.useEffect(() => {
        const database  = getFirestore();
        const coleccion = 'productos'
        const reference = collection(database, coleccion)

        if (!idCategory) {
            getDocs(reference).then((snapshot) => setItems(snapshot.docs.map((documentos) => ({id: documentos.id, ...documentos.data()}))))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        } else {
            const itemRef = query(collection(database, 'productos'), where('categoria', '==' ,idCategory))
            getDocs(itemRef).then((snapshot) => setItems(snapshot.docs.map((documentos) => ({id: documentos.id, ...documentos.data()}))))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }
    
    }, [idCategory])

    return (
        <>
        {console.log(item)}
        {loading && <h1 className=''>loading..</h1>}
        {items && <ItemList items={items} /> } 
        </>
    )
}