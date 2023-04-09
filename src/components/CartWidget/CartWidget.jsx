import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
    const ctx = useContext(CartContext);

    return (
        <p className="cart">🛒{ctx.calcItemsQty()}</p>
    )
}

export default CartWidget;