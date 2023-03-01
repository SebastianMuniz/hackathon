import Cart from '../Cart';
import styles from './Layout.module.scss';

const Layout = ({ children }: {children: JSX.Element}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Cart />
      </div>
      {children}
    </div>
  );
};

export default Layout;
