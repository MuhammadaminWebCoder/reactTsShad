import endPositionLogo from '../assets/endLogoPosition.png'
type Positions = {
    title: string;
    location: string;
  };
  
  type Department = {
    name: string;
    positions: Positions[];
  };
  
  const departments: Department[] = [
    {
      name: "Customer Success",
      positions: [
        { title: "Customer Success Manager", location: "Woodbury, NY" }
      ]
    },
    {
      name: "Professional Services & Delivery",
      positions: [
        { title: "Full Stack .NET Developer", location: "Woodbury, NY" },
        { title: "Project Manager", location: "Woodbury, NY" }
      ]
    },
    {
      name: "Sales",
      positions: [
        { title: "Business Development Representative", location: "Woodbury, NY" },
        { title: "Partner Manager", location: "Woodbury, NY" }
      ]
    }
  ];

const Position = () => {
  return (
    <section className="containerOn">
      <div className="py-24">
        <strong className="font-semibold text-xl">Open Positions</strong>
        <ul className="border-t text-[#827d7e] border-t-black mt-1">
            {departments.map((item:Department,ind:number)=>(
                <li key={ind} className='border-b py-4 border-slate-300'>
                    <p className='text-lg'>{item.name}</p>
                    <ul className='mt-7 text-lg'>
                        {item.positions.map((items:Positions,index:number) => (
                            <li key={index} className='px-4 flex justify-between items-center'><p className='text-[#b6c319] font-semibold'>{items.title}</p><p>{items.location}</p></li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
        <div className="flex justify-end mt-3 text-slate-300 text-sm"><p className='mt-3'>Powered by</p> <img className='h-[18px]' src={endPositionLogo} alt="endlogoPosition" /></div>
      </div>
    </section>
  )
}

export default Position
