import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <div className={styles.mainPages}>
          <li>
            <NavLink to="/">Logo</NavLink>
          </li>
          <li>
            <NavLink to="/trips">Trips</NavLink>
          </li>
          <li>
            <NavLink to="/scheduled">Scheduled</NavLink>
          </li>
        </div>
        <li>
          <NavLink to="login">Log in</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
