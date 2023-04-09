import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "../ItemList/ItemList.jsx";
import { firestoreFetch } from "../../firebase/FirebaseFetch.jsx";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idTipo } = useParams();

  useEffect(() => {
    firestoreFetch(idTipo)
      .then(result => setProductos(result))
      .catch(err => console.log(err))
  }, [idTipo])

  return (<ItemList productos={productos} />)

};

export default ItemListContainer;
