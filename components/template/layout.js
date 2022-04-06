import Meta from "../meta";
import Alert from "../molecules/alert";
import Footer from "../organisms/footer";
import Menu from "../organisms/menu";

export default function Layout({ preview, children,pages }) {
    return (
    <>
      <Meta />
      <div className="min-h-screen">
          <Menu pages={pages}/>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
