import image from '../assets/ColbaImg.png'
interface ColbaBoxItem {
    id: number;
    image: string;
    imageAlt: string;
    description1: string;
    description2: string;
    description3: string;
  }
  
const ColbaCard = () => {
    const ColbaBox:ColbaBoxItem[] = [
        {
            id:1,
            image,
            imageAlt:'Colba 360 image',
            description1:'AI-powered site search boosting revenue & customer satisfaction.',
            description2:'',
            description3:'',
        },
        {
            id:2,
            image,
            imageAlt:'Colba 360 image',
            description1:'AI-powered site search boosting revenue & customer satisfaction.',
            description2:'',
            description3:'',
        },
        {
            id:3,
            image,
            imageAlt:'Colba 360 image',
            description1:'Salesforce-native CMS for powerful intranets,',
            description2:'portals,',
            description3:'communities.',
        },
        {
            id:4,
            image,
            imageAlt:'Colba 360 image',
            description1:'AI-powered site search boosting revenue & customer satisfaction.',
            description2:'',
            description3:'',
        },
        {
            id:5,
            image,
            imageAlt:'Colba 360 image',
            description1:'AI-powered site search boosting revenue & customer satisfaction.',
            description2:'',
            description3:'',
        },
        {
            id:6,
            image,
            imageAlt:'Colba 360 image',
            description1:'AI-powered site search boosting revenue & customer satisfaction.',
            description2:'',
            description3:'',
        },
        {
            id:7,
            image,
            imageAlt:'Colba 360 image',
            description1:'AI-powered site search boosting revenue & customer satisfaction.',
            description2:'',
            description3:'',
        },
        {
            id:8,
            image,
            imageAlt:'Colba 360 image',
            description1:'AI-powered site search boosting revenue & customer satisfaction.',
            description2:'',
            description3:'',
        }
    ]
  return (
    <section className="ColbaCards">
        <div className="containerOn px-12 py-24">
        <ul className='grid grid-cols-4 gap-7'>
            {ColbaBox.map((item: ColbaBoxItem) => (
                <li key={item.id} className='px-7 py-5 border border-slate-100 hover:border-black rounded-md'>
                    <img src={item.image} alt={item.imageAlt} />
                    <p className='w-[80%] leading-5 mt-3 text-[#8a8c92]'>{item.description1}</p>
                    {item.description2 && <p className='w-[80%] leading-5 text-[#8a8c92]'>{item.description2}</p>}
                    {item.description3 && <p className='w-[80%] leading-5 text-[#8a8c92]'>{item.description3}</p>}
                </li>
            ))}
        </ul>

        </div>
    </section>
  )
}

export default ColbaCard
