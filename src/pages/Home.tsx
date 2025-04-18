// import { getProduct } from "../services/getProducts";
import Counter from "../components/Counter"
import HeroHome from "../components/HeroHome"
import CeoNext from "../components/CeoNext"
import Bridgeline from "../components/Bridgeline"
import Brands from "../components/Brands"
import News from "../components/News"
import Talk from "../components/Talk"

const Home = () => {
    // const data = getProduct("/api/images")
    // console.log(data);
  return (
    <>
        <HeroHome/>
        <Counter/>
        <CeoNext/>
        <Bridgeline/>
        <Brands/>
        <News/>
        <Talk/>
    </>
  )
}

export default Home
