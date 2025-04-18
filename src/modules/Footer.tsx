import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Logo } from "../assets/icons/index";
import { PATH } from "../hooks/usePath";
import { ReactNode } from "react";
interface FooterTextType {
  id:number,
  title:string,
  AboutSee:string[]
}
interface iconType {
  id:number,
  path:string,
  iconModel:ReactNode
}
const Footer = () => {

  const FooterText:FooterTextType[] = [
    {
      id:1,
      title:"About Bridgeline",
      AboutSee:["Board of Directors", "Leadership", "Careers", "Investor Relations", "Press", "Media Kit", "Newsroom", "Compliance and Security"]
    },
    {
      id:2,
      title:"Bridgeline Products",
      AboutSee:["Celebros", "DataBravo", "Hawksearch", "Orchestra", "TruPresence", "Unbound", "WooRank"]
    },
    {
      id:3,
      title:"Get in Touch",
      AboutSee:["Contact Us"]
    },
  ]
  const icons:iconType[] = [
    {
      id:1,
      path:"https://www.facebook.com/",
      iconModel:<Facebook/>
    },
    {
      id:2,
      path:"https://www.twitter.com/",
      iconModel:<Twitter/>
    },
    {
      id:3,
      path:"https://www.linkedIn.com/",
      iconModel:<Linkedin/>
    },
    {
      id:4,
      path:"https://www.youtube.com/",
      iconModel:<Youtube/>
    },
    {
      id:5,
      path:"https://www.instagram.com/",
      iconModel:<Instagram/>
    },
  ]
  return (
    <footer className="containerOn pt-16">
      <div className="space-y-8">
        <div className="flex sm:flex-row flex-col">
          <div className="min-w-[290px] flex flex-wrap lg:w-[1000px] md:w-[600px]">
            <ul className="grid grid-cols-4 gap-2 w-full">
              {FooterText.map((item: FooterTextType, index: number) => (
                <div key={index}>
                  <li className="pb-3 font-semibold">{item.title}</li>
                  {item.AboutSee.map((item: string, index: number) =>(
                  <li className="my-1 " key={index}><Link className="hover:text-[#d6f01a]" to={'#'}>{item}</Link></li>
                  ))}
                </div>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-4 justify-between">
              {icons.map((icon:iconType, index:number) => (
                <Link key={index} to={`${icon.path}`}>{icon.iconModel}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex mb-6 justify-between items-end">
          <div>
            <Link to={PATH.home}><Logo extraClass={'w-[140px]'}/></Link>
            <p className="text-[12px] mt-3">© 2025 Bridgeline Digital</p>
            <p className="text-[12px]">100 Sylvan Rd, Suite G-700, Woburn, Massachusetts 01801 US</p>
          </div>
          <div className="text-[12px] space-x-5">
            <Link className="hover:underline" to={'https://www.bridgeline.com/terms-of-use'}>Terms of Use</Link>
            <Link className="hover:underline" to={'https://www.bridgeline.com/privacy-policy'}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
