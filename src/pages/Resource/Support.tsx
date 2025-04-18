import Hero from "../../components/Hero"
import Supporter from "../../components/Supporter"
import Talk from "../../components/Talk"

const Support = () => {
  return (
    <>
      <Hero title={'Support'} extraClass={'!h-fit'} must={"We've Got Your Back"} description={"We're standing by to support you."}  />
      <Supporter/>
      <Talk/>
    </>
  )
}

export default Support

