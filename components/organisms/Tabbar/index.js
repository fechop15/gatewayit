import {useCallback} from "react";
import classNames from "classnames";
import {AiFillHome, AiFillCompass} from "react-icons/ai";
import {BsFillBagFill, BsFillPersonFill} from "react-icons/bs";
import {CgInbox} from "react-icons/cg";
import styles from "./Tabbar.module.css";
import Alert from "../../molecules/alert";
import Container from "../../atoms/container";

function Index({navigationData, currentRoute, setCurrentRoute}) {
    const getTabIcon = useCallback((item) => {
        switch (item) {
            case "Inicio":
                return <AiFillHome/>;
            case "Nosotros":
                return <AiFillCompass/>;
            case "Servicios":
                return <BsFillBagFill/>;
            case "I+D+I":
                return <CgInbox/>;
            case "Blog":
                return <BsFillPersonFill/>;
        }
    }, []);

    return (
        <>
            <div className={styles.topbar}>
                <Container>
                    <img src="../../images/gateway_it_logo_white.png" alt="logo gateway it" name="gateway"  className={styles.logo}/>
                </Container>
            </div>
            <nav className={styles.tabbar}>
                {navigationData.map((item, index) => (
                    <span
                        key={index}
                        className={classNames([
                            styles.tabItem,
                            currentRoute === item && styles.tabItemActive,
                        ])}
                        onClick={() => setCurrentRoute(item)}
                    >
                    <div>
                        <p className={styles.icon}>{getTabIcon(item)}</p>
                        <p className={styles.text}>{item}</p>
                    </div>

        </span>
                ))}
            </nav>
        </>
    );
}

export default Index;
