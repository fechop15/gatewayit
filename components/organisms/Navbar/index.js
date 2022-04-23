import classNames from "classnames";
import styles from "./Navbar.module.css";

function Navbar({navigationData, currentRoute, setCurrentRoute}) {
    return (
        <nav className={styles.navbar}>
            <span className={styles.logo}>
                <img src="../../images/gateway_it_logo_white.png" alt="logo gateway it" name="gateway"/>
            </span>
            <ul className={styles.navItems}>
                {navigationData.map((item, index) => (
                    <li
                        className={classNames([
                            styles.navItem,
                            currentRoute === item && styles.selectedNavItem,
                        ])}
                        key={index}
                        onClick={() => setCurrentRoute(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <button className={styles.actions}>Logout</button>
        </nav>
    );
}

export default Navbar;


