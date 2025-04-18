import Brands from '../components/Brands'
import ColbaCard from '../components/ColbaCard'
import Hero from '../components/Hero'
import News from '../components/News'
import Talk from '../components/Talk'

const Products = () => {
  return (
    <>
      <Hero title={'Our Products'} must={'Solutions to Grow Your Online Business'} description={"Bridgeline's wide selection of tools and products can help any business achieve their goals of increased traffic, boosted conversions, and higher revenue."} />
      <ColbaCard/>
      <Brands/>
      <News/>
      <Talk/>
    </>
  )
}

export default Products
