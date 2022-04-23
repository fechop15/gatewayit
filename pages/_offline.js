import Layout from "../components/templates/layout";
import Head from "next/head";
import {CMS_NAME, ITEM_MENU} from "../lib/constants";
import Navbar from "../components/organisms/Navbar";
import Tabbar from "../components/organisms/Tabbar";
import Container from "../components/atoms/container";
import Intro from "../components/organisms/intro";
import useNavigation from "../hooks/useNavigation";

export default function Offline() {
    const {currentRoute, setCurrentRoute} = useNavigation();

    return (
        <Layout>
            <Head>
                <title>Next.js Blog Example with {CMS_NAME}</title>
                <link rel='manifest' href='/manifest.json'/>
            </Head>
            <Navbar
                navigationData={ITEM_MENU}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
            <Tabbar
                navigationData={ITEM_MENU}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />

            <Container>
                <Intro/>
                <div>Red sin conexion</div>
            </Container>
        </Layout>
    )

}
