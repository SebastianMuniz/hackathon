import { AiOutlineShoppingCart } from 'react-icons/ai' 
import { useCartContext } from '../../context/CartContext';
import styles from './Cart.module.scss';

const Cart = () => {
  const { totalItems } = useCartContext()
  return (
    <div className={styles.cart}>
      <div className={styles.icon}>
        <span className={styles.quantityBadge}>{totalItems()}</span>
        <AiOutlineShoppingCart size={24} />
      </div>
    </div>
  );
};

export default Cart;
