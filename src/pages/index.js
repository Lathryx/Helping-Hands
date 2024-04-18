import Image from "next/image";
import supportArt from "../assets/undraw_a_whole_year_vnfm.svg"; 

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-d10">
          <div className="p-10 sm:p-20 sm:dpr-0 pt-20 sm:pt-40 w-full">
            <p className="text-7xl sm:text-8xl md:text-9xl text-neutral font-bold">Helping <br />Hands</p>
            <p className="text-xl sm:text-2xl md:text-3xl text-neutral-600">Helping refugees live better lives</p> 
          </div>
          <Image className="w-2/3 sm:w-1/2 lg:w-1/3 mt-30 lg:mt-60 lg:mr-28" src={supportArt} alt="a person gesturing their hands to form a heart shape" /> 
        </div>
      </div>
    </div>
  );
}
