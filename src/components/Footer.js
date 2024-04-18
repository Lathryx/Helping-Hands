import HHLogo from "../assets/HelpingHandsLogo.js"; 

export default function Footer() {
    return (
        <div className="footer items-center p-4 bg-accent">
            <aside className="items-center grid-flow-col">
                <HHLogo className="w-14 h-auto fill-neutral" />
                <p className="text-neutral">Copyright © 2024 - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-neutral font-bold">
                <a>SOCIAL</a>
                <a>SOCIAL</a>
                <a>SOCIAL</a>
            </nav>
        </div>
    ); 
}