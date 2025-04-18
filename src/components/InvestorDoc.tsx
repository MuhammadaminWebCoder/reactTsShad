import { Download } from "lucide-react"
import { Link } from "react-router-dom"
interface docsType {
    id:number,
    image:string,
    title:string
}
const InvestorDoc = () => {
    const docs:docsType[] = [
        {
            id:1,
            image:'https://www.tennessean.com/gcdn/authoring/authoring-images/2025/02/23/NDHE/79683720007-0-k-8-a-6479.JPG?crop=5999,3375,x0,y312&width=660&height=372&format=pjpg&auto=webp',
            title:'Annual Report',
        },
        {
            id:1,
            image:'https://www.tennessean.com/gcdn/authoring/authoring-images/2025/02/23/NDHE/79683720007-0-k-8-a-6479.JPG?crop=5999,3375,x0,y312&width=660&height=372&format=pjpg&auto=webp',
            title:'Annual Report',
        },
        {
            id:1,
            image:'https://www.tennessean.com/gcdn/authoring/authoring-images/2025/02/23/NDHE/79683720007-0-k-8-a-6479.JPG?crop=5999,3375,x0,y312&width=660&height=372&format=pjpg&auto=webp',
            title:'Annual Report',
        },
        {
            id:1,
            image:'https://www.tennessean.com/gcdn/authoring/authoring-images/2025/02/23/NDHE/79683720007-0-k-8-a-6479.JPG?crop=5999,3375,x0,y312&width=660&height=372&format=pjpg&auto=webp',
            title:'Annual Report',
        },
    ]
  return (
    <section className="containerOn">
      <ul className="py-12 space-x-12 grid grid-cols-12">
        {docs.map((item:docsType,ind:number) => (
            <li key={ind} className="pb-12 flex border-b col-span-6">
                <Link className="relative" to={'/'}>
                    <img className="w-[240px] rounded-md h-[150px]" src={item.image} alt="docs img" />
                    <p className="absolute bg-white rounded-full w-[52px] h-[52px] flex items-center justify-center shadow-md -bottom-2 right-2"><Download/></p>
                </Link>
                <strong className="hover:text-[#beea21] text-4xl ms-7 mt-5">{item.title}</strong>
            </li>
        ))}
      </ul>
    </section>
  )
}

export default InvestorDoc
