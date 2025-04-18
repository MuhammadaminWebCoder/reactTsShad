import React from 'react'
import {Brend1, Brend2} from '../assets/icons/index'

const Brands = () => {
    const brands:React.ReactElement[] = [
        <Brend1/>,
        <Brend2/>,
        <Brend1/>,
        <Brend1/>,
        <Brend1/>,
        <Brend1/>,
        <Brend2/>,
        <Brend1/>,
        <Brend1/>,
        <Brend1/>,
    
     ]
  return (
    <section className="brands bg-slate-100">
        <div className="containerOn py-24">
            <p className="text-center text-[20px]">Leading businesses use Bridgeline to transform their digital presence into a growth engine</p>
            <div className="grid grid-cols-10 space-y-5 mt-10 ">
                {brands.map((brand:React.ReactElement,ind:number) => <div key={ind} className="col-span-2 hover:scale-[1.2] duration-300 mx-auto">{brand}</div>)}
            </div>
        </div>
      </section>
  )
}

export default Brands
