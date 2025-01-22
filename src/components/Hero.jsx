import { LuImport} from "react-icons/lu"
import webdev3 from "../assets/tri.gif"
const Hero = () => {
  return (
  <section>
    <div className="flex flex-col items-center justify-center">
        <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold 
        uppercase leadinf-none">
            Yash <br></br> Dubale
        </h1>
        <div className="mt-8">
            <a href="/FinalResume_YashDubale.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center rounded-xl bg-lime-600
            p-2 px-3 font-sans font-medium text-black hover:bg-lime-800">
                <span>Resume.pdf</span>
                <LuImport className="ml-2"></LuImport>
            </a>
            
        </div>
        <div className="w-full">
            <img src={webdev3} alt="Yash Dubale" className=" h-95 w-full object-cover"></img>
        </div>
    </div>
  </section>
  )
}

export default Hero