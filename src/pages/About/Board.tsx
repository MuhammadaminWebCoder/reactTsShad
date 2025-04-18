import Brands from "../../components/Brands"
import Hero from "../../components/Hero"
import Leaders from "../../components/Leaders"
import Talk from "../../components/Talk"

const Board = () => {
  return (
    <>
      <Hero title={'Our Board'} must={'Trusted advisors, investors, and industry pioneers'}  />
      <Leaders title={'Board of Directors'} status={'director'} />
      <Brands/>
      <Talk/>
    </>
  )
}

export default Board
