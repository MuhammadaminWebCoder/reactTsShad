import Hero from "../../components/Hero"
import News from "../../components/News"
import Talk from "../../components/Talk"

const Newsroom = () => {
  return (
    <>
      <Hero extraClass={'!h-fit'} title={'Newsroom'} must={"Welcome to the Pulse of Bridgeline"} description={"Recent News, Press Coverage, and Media Assets."}  />
      {/* <Coverage/>
      <BoxesAbout/>
      <InvestorAseen/>
      <Events/> */}
      <News/>
      {/* <Podcasts/>
      <Social/>
      <GetTuch/>
      <Questions/>
      <Highlights/> */}
      <Talk/>
    </>
  )
}

export default Newsroom
