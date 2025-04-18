interface boxType {
    id:number,
    title:string,
    count:number,
    degre:string
}
const HeroHome = () => {
    const box:boxType[] = [
        {
            id:1,
            title:"Traffikc",
            count:111,
            degre:"+5%"
        },
        {
            id:2,
            title:"Traffikc",
            count:111,
            degre:"+5%"
        },
        {
            id:3,
            title:"Traffikc",
            count:111,
            degre:"+5%"
        },
    
     ]
  return (
      <section className="hero bg-[#0d0f1b]">
        <div className="containerOn min-[915px]:flex justify-end">
            <div className="flex max-w-[490px] flex-col text-white justify-center max-[915px]:mx-auto gap-5">
                <h1 className="text-[#afda22] leading-[20px] text-[40px]">Our Mission</h1>
                <strong className="text-[65px] max-[1060px]:text-[45px] leading-[67px] max-[1060px]:leading-[50px]">Grow Your Online Revenue</strong>
                <p className="min-[1060px]:text-[20px] leading-[25px]">Our products increases your online revenue by growing traffic to your site, converting traffic into buyers, and increasing order size of your buyers.</p>
            </div>
            <div className="hero_backround">
                <div className="flex gap-3 bottom-[130px] w-[66%] text-white justify-between items-end h-[500px] max-[1200px]:h-[450px] mx-auto">
                    {box.map((item: boxType) => (
                        <div key={item.id} className="flex flex-col text-[25px] w-[170px] rounded-md bg-[#1a1c22] px-[15px] py-[10px] 
                        transform transition-transform duration-300 cursor-pointer ease-in-out hover:translate-y-[-10px]">
                            <p className="text-[17px] text-slate-300">{item.title}</p>
                            <div className="flex mt- items-center justify-between">
                                <strong className="max-[1200px]:text-[15px]">{item.count}K</strong>
                                <p className="text-[#afda22] text-[19px] font-semibold">{item.degre}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
  )
}

export default HeroHome
