import { useState } from "react";
interface featureType {
  id:number,
  title:string,
  description:string,
  key:string
}
const Customers = () => {
  const [active, setActive] = useState<string | null>('traffic');
  const features:featureType[] = [
    {
      id:1,
      title: "Drive Traffic",
      description:
        "Digital businesses are able to capture a relevant and eager audience across all acquisition channels.",
      key: "traffic",
    },
    {
      id:2,
      title: "Boost Conversions",
      description:
        "Websites can turn casual browsers into repeat customers with unique optimization tools.",
      key: "conversion",
    },
    {
      id:3,
      title: "Raise Average Order Value",
      description:
        "Prompt your customers to stay on site and increase basket size, improving your overall AOV.",
      key: "aov",
    },
  ];
  return (
    <section className="customers">
      <div className="containerOn  py-24">
        <strong className="text-center block text-5xl my-12">What we do for our customers</strong>
        <div className="flex px-12 items-center justify-between">
          <div className="flex w-[455px] flex-col gap-5">
            {features.map((feature:featureType) => (
              <div
                key={feature.id}
                onMouseEnter={() => setActive(feature.key)}
                className={`border-l-4 p-4 pe-0 cursor-pointer transition-all duration-300 ${active === feature.key ? "border-lime-400" : "border-gray-200"}`}
              >
                <h3 className="text-4xl mb-2 font-semibold">{feature.title}</h3>
                <p className="text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="relative w-[450px] flex items-center justify-center">
            {active == 'traffic' && <img src="https://cdn.prod.website-files.com/6076c2f686bba6adc1981dbb/60995536738f3c7e675d5aec_Revenue%20Flywheel%20-%20Traffic.svg" alt="" />}
            {active == 'conversion' && <img src="https://cdn.prod.website-files.com/6076c2f686bba6adc1981dbb/6099551722efd717f152e2c9_Revenue%20Flywheel%20-%20Conversion.svg" alt="" />}
            {active == 'aov' && <img src="https://cdn.prod.website-files.com/6076c2f686bba6adc1981dbb/6099551b9050be1638039ab0_Revenue%20Flywheel%20-%20AOV.svg" alt="" />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customers
