import Brands from "../components/Brands"
import Customers from "../components/Customers"
import Growing from "../components/Growing"
import Hero from "../components/Hero"
import StrategyBox from "../components/StrategyBox"
import EcommerceHub from "../components/EcommerceHub"
import Talk from "../components/Talk"

const Strategy = () => {
  return (
    <>
      <Hero title={'Our Strategy'} must={'Harnessing the Power of Marketing Technology'} description={'We guide businesses toward ultimate online growth'} />
      <Customers/>
      <Growing/>
      <StrategyBox/>
      <EcommerceHub/>
      <Brands/>
      <Talk/> 
    </>
  )
}

export default Strategy
