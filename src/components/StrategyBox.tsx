import { ReactNode } from "react";
import { StrategyIcon1, StrategyIcon2, StrategyIcon3 } from "../assets/icons"
interface strategyBoxType {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}
const StrategyBox = () => {
  const strategyBox:strategyBoxType[] = [
    {
      id:1,
      icon:<StrategyIcon1/>,
      title:'Capturing a Larger Audience',
      description:'We are expanding our addressable market with our innovative Product and App approach. Our acquisitions, past and future, allow us to diversify our offerings.'
    },
    {
      id:2,
      icon:<StrategyIcon2/>,
      title:'COVID-19 Driven eCommerce',
      description:"The e360 Hub enables full visibility over the revenue funnel. With that, our clients can see smart suggestions to improve their users' full buying experience."
    },
    {
      id:3,
      icon:<StrategyIcon3/>,
      title:'Touchless Sales to Remove Friction',
      description:"We can transform our sales process with the e360 Hub, optimizing our customers' journey with incremental enhancements and uncomplicated upgrades."
    },
  ]
  return (
    <section className="strategy">
      <div className="containerOn !px-12 py-24">
        <h1 className="text-5xl text-center font-bold">The Core Pillars of Our Strategy</h1>
        <p className="text-[22px] text-center mt-5">Attract, engage, and convert your target audience with Bridgeline's suite of products.</p>
        <ul className="gap-5 py-12 grid grid-cols-3">
            {strategyBox.map((item:strategyBoxType) => <li key={item.id} className="md:pe-22">
              {item.icon}
              <strong className="text-2xl font-semibold my-3 block">{item.title}</strong> 
              <p>{item.description}</p> 
            </li>)}
        </ul> 
      </div>
    </section>
  )
}
export default StrategyBox
