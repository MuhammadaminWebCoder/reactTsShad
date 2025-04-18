import Hero from "../../components/Hero"
import InvestorDoc from "../../components/InvestorDoc"
import News from "../../components/News"

const Investors = () => {
  return (
    <>
      <Hero containerClass={'!py-0'} extraClass={'!h-[250px]'} must={'Investor Relations'}  />
      <InvestorDoc/>
      <News/>
    </>
  )
}

export default Investors
