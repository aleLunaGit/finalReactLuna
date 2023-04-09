import Item from '../Item/Item'

const ItemList = ({ productos }) => {
  return (
    <>
      <div className='d-flex'>{
        productos.map(item => (<Item key={item.id} productos={item} />))
      }
      </div>

    </>
  )
}

export default ItemList