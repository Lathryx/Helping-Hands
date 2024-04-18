import Image from "next/image"; 
import lostArt from "../assets/undraw_by_the_road_re_vvs7.svg"; 

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Image className="w-2/3 md:w-1/2" src={lostArt} /> 
            <p className="mt-10 text-neutral-500">This page does not exist!</p> 
        </div>
    ); 
}