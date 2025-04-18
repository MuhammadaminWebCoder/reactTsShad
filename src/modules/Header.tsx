import { ChevronDown, Menu, SearchIcon } from "lucide-react";
import { Logo } from "../assets/icons";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../hooks/usePath";
import { Input } from "../components/ui/input";

const Header = () => {
  const locate = useNavigate()
  const searchPageHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      locate('/search')
    }
  }
const [openMenu,setOpenMenu] = useState<boolean>(false)
const [search, setSearch] = useState<string>(""); 
console.log(openMenu);

const list = [
    { title: "Our Products", path:PATH.products },
    { title: "Strategy", path:PATH.strategy },
    {
      title: "About",
      downList: [
        { item: "Careers",path:PATH.careers },
        { item: "Leadership",path:PATH.leadership },
        { item: "Board",path:PATH.board },
        { item: "Investors",path:PATH.investors }
      ]
    },
    {
      title: "Resources",
      downList: [
        { item: "Newsroom" ,path:PATH.newsroom},
        { item: "Press Releases",path:PATH.pressReleases },
        { item: "Media Kit",path:PATH.mediaKit },
        { item: "Release Highlights",path:PATH.release },
        { item: "Support",path:PATH.support }
      ]
    }
  ];
  return (
    <header className="containerOn mx-auto max-[1162px]:p-3 flex items-center justify-between">
      <div className="flex items-center py-4">
        <Link to={PATH.home}><Logo extraClass={'w-[171px] h-[24px]'} /></Link>
        <ul className="max-[1162px]:hidden flex text-[17px] ms-10 items-center gap-6">
          {list.map((item, index) => (
            <li key={index} className="relative h-[40px] after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-[#d9f024] after:transition-all after:duration-300 hover:after:w-full group cursor-pointer flex items-center gap-2">
              {item.path ? <Link to={item.path}>{item.title}</Link> : `${item.title}`}
              {item.downList && <ChevronDown />}
              {item.downList && (
                <ul className="absolute rounded-sm w-max left-0 z-50 mt-2 top-8 bg-white shadow-lg  p-2 hidden group-hover:block">
                  {item.downList.map((down, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:underline hover:text-[#d9f024] rounded group-hover:block">
                      {down.path ? <Link to={down.path}>{down.item}</Link> : `${down.item}`}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Menu onClick={() => setOpenMenu(true)} className="min-[1162px]:hidden cursor-pointer" />
      <div className="max-[1162px]:hidden flex">
        <form onSubmit={searchPageHandleSubmit} className="inp relative">
          <Input onChange={(e)=> setSearch(e.target.value)} value={search} type="text" className="h-[45px] w-[280px] rounded-full px-5 outline-0 bg-slate-100" placeholder="search..." />
          <SearchIcon className="absolute top-[10px] w-[18px] right-5" />
        </form>
        <Link to={PATH.contact}><Button className="h-[45px] cursor-pointer rounded-sm ms-6 px-12 text-[17px]">Contact Us</Button></Link>
      </div>
    </header>
  );
};

export default Header;
