// import Alert from '../molecules/alert'
import Footer from '../organisms/footer'
import Meta from '../meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/*<Alert preview={preview} />*/}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
