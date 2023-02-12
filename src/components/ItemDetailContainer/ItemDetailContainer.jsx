import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../../utils/gFetch";

export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const { idProducto } = useParams();
  
    useEffect(() => {
      if(idProducto) {
      gFetch()
      .then(res => {      
        setProductos(res.find(producto => producto.id === idProducto))
      })
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))      
  } else {
    gFetch()
      .then(res => {      
        setProductos(res)
      })
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))
    
  }
  }, [idProducto]);
  
  console.log(productos)
  
    return loading ?

    <h2>RECOPILANDO</h2>
    :

    (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productos.foto} />
        <Card.Body>
          <Card.Title>{productos.nombre}</Card.Title>
          <Card.Text>
          DESCRIPCION DEL PRODUCTO
          </Card.Text>
          <Button variant="primary">COMPRAR</Button>
        </Card.Body>
      </Card>
    )
  };