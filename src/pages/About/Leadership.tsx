import Brands from "../../components/Brands"
import Hero from "../../components/Hero"
import Leaders from "../../components/Leaders"
import Talk from "../../components/Talk"

const Leadership = () => {
  return (
    <>
      <Hero title={'Our Executives'} must={'Expertise Dedicated to Your Growth'}  />
      <Leaders title={'Leadership'} status={'leader'} />
      <Brands/>
      <Talk/>
    </>
  )
}

export default Leadership
