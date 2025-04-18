import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { PATH } from '../hooks/usePath';

const Talk = () => {
  return (
    <section className="talk bg-[#0e111b] text-white py-24">
        <div className="containerOn px-12 flex">
            <div className="w-full md:w-[50%]">
                <strong className="text-3xl font-semibold">Let's talk</strong>
                <p className="my-4">Get in touch with our team for general inquiries</p>
                <Link to={PATH.contact}><Button className="bg-transparent hover:bg-[#cddc12] hover:text-black rounded-sm w-[150px] h-[45px] border">Contact us</Button></Link>
            </div>
            <div className="w-full md:w-[50%]">
                <strong className="text-3xl font-semibold">Investor Contact</strong>
                <p className="mt-4">Questions for the Investor Relations department can be emailed to</p>
                <Link to={'/'} className="my-4 text-[#cddc12]">InvestorRelations@bridgeline.com</Link>
            </div>
        </div>
    </section>
  )
}

export default Talk
