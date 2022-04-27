// import Alert from '../molecules/alert'
import Footer from '../organisms/footer'
import Meta from '../meta'
import Navbar from "../organisms/Navbar";
import {ITEM_MENU} from "../../lib/constants";
import Tabbar from "../organisms/Tabbar";
import useNavigation from "../../hooks/useNavigation";

export default function Layout({ preview, children }) {
    const { currentRoute, setCurrentRoute } = useNavigation();

    return (
    <>
      <Meta />
        <Navbar
            navigationData={ITEM_MENU}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
        />
      <div className="min-h-screen">
        {/*<Alert preview={preview} />*/}
        <main>{children}</main>
      </div>
        <Tabbar
            navigationData={ITEM_MENU}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
        />
      <Footer />
    </>
  )
}
