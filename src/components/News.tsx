import { Link } from "react-router-dom"
interface NewsType {
    id:number,
    title:string,
    date:string
}
const News = () => {
    const news:NewsType[] = [
        {
            id:1,
            title:"Prominent LED Lighting Manufacturer Selects HawkSearch to Power Advanced On-Site Search",
            date:"March 20, 2025"
        },
        {
            id:2,
            title:"Bridgeline Digital Announces $2.2 Million Offerings of Common Stock",
            date:"March 20, 2025"
        },
        {
            id:3,
            title:"Bridgeline Digital Announces $2.2 Million Offerings of Common Stock",
            date:"March 20, 2025"
        },
        {
            id:4,
            title:"Major Beauty Supply Distributor Launches HawkSearch to Power Product Discovery",
            date:"March 20, 2025"
        },
        {
            id:5,
            title:"Bridgeline Digital Announces $2.2 Million Offerings of Common Stock",
            date:"March 20, 2025"
        },
        {
            id:6,
            title:"Bridgeline Digital Announces $2.2 Million Offerings of Common Stock",
            date:"March 20, 2025"
        }
     ]
  return (
    <section className="news containerOn py-24 px-12">
        <div>
            <h1 className="text-[40px] font-[700]">Recent News</h1>
            <ul className="mt-5">
                {news.map((item:NewsType) => (
                    <li key={item.id} className="w-full border-b">
                        <div className="w-full flex flex-col gap-2 my-10">
                            <Link to={'/'} className="text-[32px] line-clamp-2 hover:text-[#cfe41e] font-[700]">{item.title}</Link>
                            <p>{item.date}</p> 
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </section>
  )
}

export default News
