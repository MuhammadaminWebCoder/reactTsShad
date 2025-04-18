import Hero from "../../components/Hero"
import LocateContact from "../../components/LocateContact"
import News from "../../components/News"

const PressReleases = () => {
  return (
    <>
      <Hero extraClass={'!h-fit'} must={"Press"} description={"Updates and press relating to Bridgeline and our product portfolio"}  />
      <News/>
      <LocateContact/>
    </>
  )
}

export default PressReleases
