"use client"
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import NavbarComponent from "@/components/Navbars";
import Navbar from "@/components/navbar";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { useState, useEffect } from "react";
import SidebarWithVisibleSocial from "@/components/sidebar-with-visible-social";
import { div } from "framer-motion/client";


export default function Home() {
  
 


  return(
    <main className="flex bg-black-100 mx-auto w-full overflow-hidden">
    <div className="  max-w-7xl w-full flex flex-col m-auto overflow-hidden">
      <Navbar />
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
      <Clients />
      <Experience />
      <Footer />
    </div>
  </main>
  
  
  )
}
