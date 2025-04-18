import { Bred1 } from '../assets/icons'
interface BridgelineItem {
    id: number;
    icon: React.ReactElement;
    title: string;
    description: string;
  }
const Bridgeline = () => {
    const bridgeline:BridgelineItem[] = [
        {
            id:1,
            icon:<Bred1/>,
            title:"Untapped Available Market",
            description:"Any eCommerce site can benefit from Bridgeline’s out-of-box or tailored solutions.", 
        },
        {
            id:2,
            icon:<Bred1/>,
            title:"Untapped Available Market",
            description:"Any eCommerce site can benefit from Bridgeline’s out-of-box or tailored solutions.", 
        },
        {
            id:3,
            icon:<Bred1/>,
            title:"Untapped Available Market",
            description:"Using our eCommerce 360 dashboard, teams can evaluate where key revenue streams are succeeding. Our actionable insights help pinpoint areas of improvement to optimize and drive performance.", 
        },
        {
            id:4,
            icon:<Bred1/>,
            title:"Untapped Available Market",
            description:"Any eCommerce site can benefit from Bridgeline’s out-of-box or tailored solutions.", 
        },
        {
            id:5,
            icon:<Bred1/>,
            title:"Untapped Available Market",
            description:"Using our eCommerce 360 dashboard, teams can evaluate where key revenue streams are succeeding. Our actionable insights help pinpoint areas of improvement to optimize and drive performance.", 
        },
        {
            id:6,
            icon:<Bred1/>,
            title:"Untapped Available Market",
            description:"Using our eCommerce 360 dashboard, teams can evaluate where key revenue streams are succeeding. Our actionable insights help pinpoint areas of improvement to optimize and drive performance.", 
        }
     ]
  return (
    <section className="Bridgeline containerOn py-24 px-12">
        <div>
            <h1 className="text-[40px] font-[700]">Why Bridgeline?</h1>
            <ul className="flex flex-wrap mt-5">
                {bridgeline.map((item:BridgelineItem) => (
                    <li key={item.id} className="md:w-[50%] md:h-[230px]">
                        <div className="w-[80%] flex flex-col gap-2">
                            {item.icon}
                            <strong className="text-2xl font-[700]">{item.title}</strong>
                            <p className="line-clamp-5">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </section>
  )
}

export default Bridgeline
