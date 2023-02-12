import React from 'react'

const Item = () => {

  return (
    <div>
      <div key={p.id} className="card w-25 mt-2">
              <Link to={`/detalle/${p.id}`}>
                <div className="card-header">
                  Nombre: {p.nombre}</div>
                <div className="card-body">
                  <img src= {p.foto} alt="foto" className="w-100" />
                  Categoria: {p.tipo}
                  <br />
                  Precio: {p.precio}
                </div>
                <div className="card-footer">
                </div>
              </Link>
            </div>
    </div>
  )
  
}

export default Item
