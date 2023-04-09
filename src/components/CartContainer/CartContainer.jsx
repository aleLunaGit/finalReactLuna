import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CartContainer = () => {
  const [orderData, setOrderData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const ctx = useContext(CartContext)

  const createOrder = () => {

    const itemsForDB = ctx.cartList.map(item => ({
      id: item.idItem,
      title: item.titleItem,
      price: item.costItem,
      qty: item.qtyItem
    }));

    ctx.cartList.forEach(async (item) => {
      const itemRef = doc(collection(db, "productos"), item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem)
      });
    });

    let order = {
      buyer: orderData,
      total: ctx.calcTotal(),
      items: itemsForDB,
      date: serverTimestamp()
    };

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }

    function swalorder(result) {
      const swalOrder = withReactContent(Swal)
      swalOrder.fire({
        title: `Tu orden ha sido completada con éxito, gracias por su compra ${order.buyer.name}`,
        text: `Por favor tome nota de su número de orden. \n\n\nNúmero de orden: ${result.id}`
      })
    }

    createOrderInFirestore()
      .then(result => swalorder(result))
      .catch(err => console.log(err));


    ctx.removeList();
  }
  const handleOnChange = (evt) => {
    setOrderData({
        ...orderData,
        [evt.target.name]: evt.target.value
    })
}

  return (
    <>
      <h2>TU CARRITO</h2>
      <Link to='/'><Button >SEGUIR COMPRANDO</Button></Link><br />
      {
        (ctx.cartList.length > 0)
          ? <Button variant='danger' onClick={ctx.removeList}>VACIAR CARRO</Button>
          : <p>Tu carro está vacío</p>
      }
      {
        ctx.cartList.length > 0 &&
        ctx.cartList.map(item =>
          <>
            <div className="container">
              <div className='product-cart row'>
                <Card className='p-3'>
                  <Card.Img style={{ width: 250 }} variant="top" src={item.imgItem} />
                  <Card.Body>
                    <Card.Title>{item.titleItem}</Card.Title>
                    <Card.Text>${item.costItem}</Card.Text>
                    <Card.Text>Cantidad: {item.qtyItem}</Card.Text>
                    <Card.Text>Costo total: ${ctx.calcTotalPerItem(item.idItem)}</Card.Text>
                    <Button variant='danger' type="filled" onClick={() => ctx.deleteItem(item.idItem)}>BORRAR</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </>
        )
      }
      {
        ctx.cartList.length > 0 &&
        <>
          <div className="container">
            <div className='product-cart row'>
              <p>TOTAL: ${ctx.calcSubTotal()}</p>
              <form>
                <input 
                    type="text" 
                    name="name"          
                    placeholder = "Ingrese el nombre"   
                    onChange={handleOnChange} 
                    value={orderData.name}

                /><br />
                <input 
                    type="text" 
                    name="phone"         
                    placeholder = "Ingrese el teléfono" 
                    onChange={handleOnChange} 
                    value={orderData.phone}

                /><br />
                <input 
                    type="text" 
                    name="email"         
                    placeholder = "Ingrese el email"    
                    onChange={handleOnChange} 
                    value={orderData.email}

                /><br />
                <Button variant='success' onClick={createOrder}>CERRAR PEDIDO</Button>
              </form>
            </div>
          </div>
        </>
      }
    </>
  );
}