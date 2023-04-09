import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetchItem } from "../../firebase/FirebaseFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idProducto } = useParams();

  useEffect(() => {
    firestoreFetchItem(idProducto)
      .then(result => setProductos(result))
      .catch(err => console.log(err))

  }, []);

  return (
    <ItemDetail item={productos} />
  )
};