import { NavLink } from "react-router-dom";
import styles from "./styles/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <NavLink to="/">
          <h1 className={styles.header__title}>Главная страница</h1>
        </NavLink>
        <nav>
          <ul className={styles.header__menu}>
            <li>
              <NavLink to="/products">Все продукты</NavLink>
            </li>
            <li>
              <NavLink to="/create-product">Добавить продукт</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
