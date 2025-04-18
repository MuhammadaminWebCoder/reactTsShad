import { FC } from "react"
import { Link } from "react-router-dom"

interface LeadersProps {
  title: string;
  status: string;
}
interface leadersType {
  id:number,
  image:string,
  title:string,
  description:string,
  status:string
}

const Leaders: FC<LeadersProps> = ({ title, status }) => {

  const leaders:leadersType[] = [
    {
      id:1,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUBmHlDqpp6EBoNY8KLcy4-yy0s0OOxjMDg&s',
      title:'Ari Kahn',
      description:'Chief Executive Officer',
      status:'leader'
    },
    {
      id:2,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUBmHlDqpp6EBoNY8KLcy4-yy0s0OOxjMDg&s',
      title:'Ari Kahn',
      description:'Executive Vice President of Revenue',
      status:'leader'
    },
    {
      id:3,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUBmHlDqpp6EBoNY8KLcy4-yy0s0OOxjMDg&s',
      title:'Thomas Windhausen',
      description:'Chief Executive Officer',
      status:'leader'
    },
    {
      id:4,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUBmHlDqpp6EBoNY8KLcy4-yy0s0OOxjMDg&s',
      title:'Ari Kahn',
      description:'Executive Vice President of Revenue',
      status:'leader'
    },
    {
      id:5,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUBmHlDqpp6EBoNY8KLcy4-yy0s0OOxjMDg&s',
      title:'Thomas Windhausen',
      description:'Chief Executive Officer',
      status:'leader'
    },
    {
      id:6,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUBmHlDqpp6EBoNY8KLcy4-yy0s0OOxjMDg&s',
      title:'Ari Kahn',
      description:'Chief Executive Officer',
      status:'leader'
    },
    {
      id:7,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUBmHlDqpp6EBoNY8KLcy4-yy0s0OOxjMDg&s',
      title:'Ari Kahn',
      description:'Executive Vice President of Revenue',
      status:'leader'
    },
    {
      id:8,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUBmHlDqpp6EBoNY8KLcy4-yy0s0OOxjMDg&s',
      title:'Thomas Windhausen',
      description:'Chief Executive Officer',
      status:'leader'
    },
    {
      id:9,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUBmHlDqpp6EBoNY8KLcy4-yy0s0OOxjMDg&s',
      title:'Ari Kahn',
      description:'Chief Executive Officer',
      status:'leader'
    },
    {
      id:10,
      image:'https://photo.boxingscene.com/uploads/dmitry-bivol-9_1703269971.jpg',
      title:'Ari Kahn',
      description:'Chief Executive Officer',
      status:'director'
    },
    {
      id:11,
      image:'https://photo.boxingscene.com/uploads/dmitry-bivol-9_1703269971.jpg',
      title:'Joni Kahn',
      description:'Chief Executive Officer, President and Director',
      status:'director'
    },
    {
      id:12,
      image:'https://photo.boxingscene.com/uploads/dmitry-bivol-9_1703269971.jpg',
      title:'Ari Kahn',
      description:'Chief Executive Officer',
      status:'director'
    },
    {
      id:13,
      image:'https://photo.boxingscene.com/uploads/dmitry-bivol-9_1703269971.jpg',
      title:'Ari Kahn',
      description:'Chief Executive Officer, President and Director',
      status:'director'
    },
  ]

  return (
    <section className="Leaderships containerOn">
      <div className="py-24">
        <strong className="text-4xl">{title}</strong>
          <ul className="flex-wrap grid grid-cols-12">
            {leaders.filter((item: leadersType) => item.status === status).map((item:leadersType,ind:number) => (
              <li className="flex my-7 items-center col-span-4" key={ind}>
                <div className="rounded-full w-[80px] h-[80px] overflow-hidden">
                  <img className="w-full h-full object-cover" src={item.image} alt="image from leader ship user ahad xudoyarov" />
                </div>
                <div className="px-4">
                    <strong className="text-xl">{item.title}</strong>
                    <p>{item.description}</p>
                    <Link className="text-blue-500 hover:underline" to={'/'}>Lean More</Link>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

export default Leaders
