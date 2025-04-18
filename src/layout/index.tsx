import { RouterPath } from "../routes"
import Header from '../modules/Header'
import Footer from "../modules/Footer"
import HelperMod from "../modules/Helper"

const Layout = () => {
  return (
    <>
      <Header/>
      <HelperMod/>
      <RouterPath/>
      <Footer/>
    </>
  )
}

export default Layout
