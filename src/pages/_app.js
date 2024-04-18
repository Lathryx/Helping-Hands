import "@/styles/globals.css"; 
import { Fraunces } from "next/font/google"; 

import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 


const fraunces = Fraunces({
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-fraunces', 
}); 

export default function App({ Component, pageProps }) {
  return (
    <div data-theme="lighttheme" className={fraunces.className}>
      <Navbar /> 
      <Component {...pageProps} />
      <Footer /> 
    </div>
  ); 
}
