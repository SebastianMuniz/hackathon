import { AiOutlineShoppingCart } from 'react-icons/ai' 
import { useCartContext } from '../../context/CartContext';
import styles from './Cart.module.scss';

const Cart = () => {
  const { totalItems, showCart } = useCartContext()
  return (
    <div className={styles.cart} style={{ top: showCart ? '60px' : '20px' }}>
      <div className={styles.icon}>
        <span className={styles.quantityBadge}>{totalItems()}</span>
        <AiOutlineShoppingCart size={24} color={showCart ? "#FFF" : "#000"} />
      </div>
    </div>
  );
};

export default Cart;
