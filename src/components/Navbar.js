import Link from "next/link"; 
import Image from "next/image"; 
import HHLogo from "../assets/HelpingHandsLogo.js"; 

export default function Navbar() {
    return (
        <div className="navbar sticky top-0 bg-accent bg-opacity-75 backdrop-blur-lg z-50">
            <div className="flex-1">
                <Link className="group btn btn-ghost text-xl text-neutral" href="/"><HHLogo className="group-hover:animate-[spin_1s_ease_forwards] max-h-full w-auto fill-neutral" /> Helping Hands</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-3 gap-3">
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    ); 
}