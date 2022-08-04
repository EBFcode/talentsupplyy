import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore} from "firebase/firestore";

export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    let { idItem } = useParams();

    useEffect(() => {
        const database = getFirestore();
        const coleccion = "productos";
        const reference = doc(database, coleccion, idItem);

        getDoc(reference).then((snapshot) => {setItem({id: snapshot.id, ...snapshot.data()})})
        .catch((error) => console.log(error))
    
    }, [idItem]);
    return (
        <>
        <ItemDetail item={item} />
        </>
    );
}
