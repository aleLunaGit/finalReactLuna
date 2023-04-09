import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ productos }) => {

  return (
    <div className="card w-25 mt-2">
      <Link to={`/detalle/${productos.id}`}>
        <div className="card-header">
          Nombre: {productos.name}</div>
        <div className="card-body">
          <img src={productos.photo} alt="foto" className="w-100" />
          Categoria: {productos.kind}
          <br />
          Precio: {productos.price}
        </div>
        <div className="card-footer">
        </div>
      </Link>
    </div>
  )

}

export default Item
