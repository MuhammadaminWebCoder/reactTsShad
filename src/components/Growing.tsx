interface growingBoxType {
  id:number,
  title:string,
  description:string,
}
const Growing = () => {
  const growingBox:growingBoxType[] = [
    {
      id:1,
      title:'Endless Expansion of Crowded Market',
      description:'The MarTech space is growing in spend and volume, with more Apps emerging every day.'
    },
    {
      id:2,
      title:'COVID-19 Driven eCommerce',
      description:'A global boom of online shopping emerged from the COVID-19 pandemic, increasing demand for stellar digital buying experiences.'
    },
    {
      id:3,
      title:'Platforms and Apps Working Together',
      description:'Apps provide a seamless sales cycle that can work in tandem with established platforms, ensuring a flawless eCommerce strategy.'
    },
  ]
  return (
    <section className="growing">
      <div className="containerOn !px-12 py-24">
        <strong className="text-[#d6f024] text-2xl font-semibold block pb-12">The Martech Industry is Steadily Growing</strong>
        <ul className="gap-5 grid grid-cols-3">
            {growingBox.map((item:growingBoxType) =>  <li key={item.id} className="transform transition-transform duration-300 cursor-pointer ease-in-out hover:translate-y-[-20px] p-8 h-[244px] bg-[#181b25] text-white">
              <strong className="text-2xl font-semibold mb-3 block">{item.title}</strong> 
              <p>{item.description}</p> 
            </li>)}
        </ul>
      </div>
    </section>
  )
}

export default Growing
