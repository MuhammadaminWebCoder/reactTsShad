import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Helper } from "../assets/icons";

const HelperMod = () => {
const modalRef = useRef<HTMLDivElement | null>(null);
const [helper,setHelper] = useState<boolean>(false)

  useEffect(() => {
    const handleClickOutside = (e:MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setHelper(false);
      }
    };

    if (helper) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [helper]);

    const [message, setMessage] = useState("");

  return (
    <div ref={modalRef}>
        <div onClick={() => setHelper(!helper)} className={`p-2 fixed bottom-7 hover:scale-[1.2] transition-all left-7 bg-blue-500 rounded-full ${helper && '!bottom-0 opacity-0'}`}>
            <Helper extraClass={`cursor-pointer w-[30px] h-[30px] `}/>
        </div>
        <div className={`fixed text-white bg-[#0e111b] p-3 h-[90vh] w-[300px] rounded-md border-8 left-10 top-100 duration-300 transition-all border-blue-500  ${helper == true ? 'opacity-100 !top-10' : 'opacity-0 -z-50'}`}>
        <div className="flex justify-between items-center"><h3 className="text-lg font-bold mb-2">Yordam kerakmi? </h3><X className="cursor-pointer" onClick={() => setHelper(false)}/></div>
        <p className="text-[#d9f024] my-3 text-center">agar web sahifa muammosi bolsa katta adminga yozing @dwdwd.telegram.com</p>
        <p className="text-[#d9f024] my-3 text-center">sahifaga idea bermoqchi bolsangiz 2 chi adminga yozsangiz web project coderiga jonatadi @dwdwd.telegram.com</p>
        <div className="flex flex-col gap-2 my-3">    
            <label className="flex items-center gap-2">
            <input type="radio" name="reason" className="accent-green-500" />
            Kod xatosi
            </label>
            <label className="flex items-center gap-2">
            <input type="radio" name="reason" className="accent-blue-500" />
            Tushunarsiz interfeys
            </label>
            <label className="flex items-center gap-2">
            <input type="radio" name="reason" className="accent-yellow-500" />
            Qo‘shimcha imkoniyat kerak
            </label>
            <label className="flex items-center gap-2">
            <input type="radio" name="reason" className="accent-yellow-500" />
            Boshqa
            </label>
        </div>
        <textarea
            className="w-full max-h-[150px] p-2 rounded-lg bg-gray-900 text-white outline-none"
            rows={3}
            placeholder="Muammoni tushuntiring..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        
        <button className="mt-3 cursor-pointer bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full">
            Yordam so‘rash
        </button>
        </div>
    </div>
  )
}

export default HelperMod
