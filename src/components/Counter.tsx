import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface Counts {
  id:number,
  title:string,
  count:number,
}
const Counter = () => {
    const Counter = ({ start = 0, end = 100, duration = 2 }) => {
        const { ref, inView } = useInView({ triggerOnce: true }); 
        const [count, setCount] = useState<number>(start);
      
        useEffect(() => {
            let startTime = performance.now();
            let animate = (time: number) => {
              let progress = Math.min((time - startTime) / (duration * 500), 1);
              setCount(Math.floor(progress * (end - start) + start));
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
        }, [inView, start, end, duration]);
      
        return (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {count}+
          </motion.div>
        );
      };
    const counters:Counts[] = [
        {
            id:1,
            title:"Clients",
            count:2500, 
        },
        {
            id:2,
            title:"Countries",
            count:100, 
        }
     ]
  return (
    <section className="counter py-24">
            <div className="containerOn px-12 flex">
                <div className="flex flex-col gap-3">
                    <strong className="text-5xl">Bridgeline Profile</strong>
                        <p className="text-[17px] w-[87%]">Bridgeline powers digital experiences for some of the world’s largest brands. Our innovative solutions enable companies to capture greater traffic, increase order value and drive conversion.​​</p>
                        <p className="text-[17px] w-[87%]">Our suite of digital experience solutions provide feature-rich eCommerce and content management capabilities, turn-key site search and merchandising, SEO optimization tools and more – all designed to keep your revenue climbing. Our solutions have boosted millions of sales across hundreds of countries globally.</p>
                </div>
                <div className="flex flex-col w-[100%]">
                        {counters.map((item:Counts) => <div key={item.id} className="w-full h-[130px] text-center">
                            <strong className="text-6xl"><Counter start={0} end={item.count} duration={2} /></strong>
                            <p className="text-xl mt-2">{item.title}</p>
                        </div>)}
                </div>
            </div>
      </section>
  )
}

export default Counter
