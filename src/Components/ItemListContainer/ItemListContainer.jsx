import React from 'react'
import './ItemListContainer.css'
import ItemList from './itemList'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { doc, getDoc, getFirestore } from "firebase/firestore"

export default function ItemListContainer() {
    const [loading, setLoading] = React.useState(true)
    const [items, setItems] = React.useState([])
    const [item, setItem] = React.useState({})

    let {idCategory} = useParams();

    React.useEffect(() => {

        let id = "0dt02mfeUCBimgVRvXKO"

        let collection = 'ropa';

        const db = getFirestore();

        // Conectate a firebase / 
        const ropa = doc(db, collection, id)
        
        getDoc(ropa).then((snapshot) => {setItem({id: snapshot.id, ...snapshot.data()})})

        let url = 'https://imcod3r.github.io/CatStoreApi/api.json'

        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!idCategory) {
                setItems(data);
            } else {
            const arrayFiltrado = data.filter((item) => item.categoria === idCategory);
            setItems(arrayFiltrado)
            }
        })
        .catch(error => console.warn(error))
        .finally(() => setLoading(false))

    }, [idCategory])

    return (
        <>
        {console.log(item)}
        {loading && 'loading..'}
        {items && <ItemList items={items} /> } 
        </>
    )
}