"use client"
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import NavbarComponent from "@/components/navbar";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { useState } from "react";


export default function Home() {
  const [nav, setnav] = useState(false)
  window.onscroll = () => {
    if (window.scrollY > 237) {
      setnav(false)
    } else {
      setnav(true)

    }

    console.log(window.scrollY);
  }


  return(
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="max-w-7xl w-full">
        
        {nav && <NavbarComponent/>}
        <FloatingNav navItems={navItems}/>               
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Footer/>
      </div>
    </main>
  )
}
