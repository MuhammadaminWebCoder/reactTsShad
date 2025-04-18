import { Download } from "lucide-react"
import { Support } from "../assets/icons"
import { Link } from "react-router-dom"
import { ReactNode } from "react"
interface supportType{
  id:number,
  image:string,
  icon:ReactNode,
  title:string,
  description:string,
  ip:string
}
const Supporter = () => {
    const supports:supportType[] = [
        {
            id:1,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXSEsx3T4RxsLRqAmVTGZNfmk4sEENGt5mg&s',
            icon:<Support/>,
            title:'Need Support?',
            description:'Contact our support technicians 24/7 and track the progress of your request, by using our online ticketing system.',
            ip:'Request Support',
        },
        {
            id:2,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXSEsx3T4RxsLRqAmVTGZNfmk4sEENGt5mg&s',
            icon:<Support/>,
            title:"Need additional support?",
            description:'Contact our support technicians 24/7 and track the progress of your request, by using our online ticketing system.',
            ip:'1.800.603.9936',
        }
    ]
  return (
    <section className="containerOn">
      <ul className="py-24 px-12 grid grid-cols-12 gap-6">
        {supports.map((item:supportType,ind:number)=> (
            <li key={ind} className="flex items-center col-span-6 px-6 py-8 bg-slate-50 rounded-md hover:bg-white hover:border-[#beea21] border">
                <div className="text-lg">
                    <strong className="text-2xl font-semibold">{item.title}</strong>
                    <p className="h-[140px] mt-2 text-slate-500 line-clamp-5">{item.description}</p>
                    <Link className="text-[#beea21]" to={'/'}>{item.ip}</Link>
                </div>
                <div className="relative flex w-[400px] justify-center">
                    <img className="rounded-full w-[120px]" src={item.image} alt="support user" />
                    <p className="absolute -bottom-1 shadow-xl rounded-full w-[50px] h-[50px] bg-white flex items-center justify-center right-3"><Download/></p>
                </div>
            </li>
        ))}
      </ul>
    </section>
  )
}

export default Supporter
