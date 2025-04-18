import { FC } from "react"
interface HeroType {
  title?:string,
  must?:string,
  description?:string,
  other?:string,
  extraClass?: string;
  containerClass?: string;
}
const Hero:FC<HeroType> = ({title,must,description,other,extraClass = '',containerClass = ''}) => {
  return (
    <section className={`Hero flex ${extraClass}`}>
        <div className={`containerOn w-full py-24 px-12 ${containerClass}`}>
            <div className="flex max-w-[912px] pe-8 flex-col text-white justify-center max-[915px]:mx-auto gap-5">
                <h1 className="text-[#afda22] leading-[20px] text-[40px]">{title}</h1>
                <strong className="text-[65px] max-[1060px]:text-[45px] leading-[67px] max-[1060px]:leading-[50px]">{must}</strong>
                <p className="min-[1060px]:text-[20px] leading-[25px]">{description}</p>
                <p className="text-[#afda22] text-xl">{other}</p>
            </div>
        </div>
    </section>
  )
}

export default Hero
