"use client"
import React from 'react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import Hero from '../components/Hero'
import { FaHome } from 'react-icons/fa';
import Grid from '@/components/Grid';
import RecenProjects from '@/components/RecenProjects';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';

const navItems = [
  {
    name:"Home",
    link:'/',
    icon:<FaHome/>
  },
  
  {
    name:"About",
    link:'/about',
    icon:<FaHome/>
  },
  {
    name:"Contact",
    link:'/contact',
    icon:<FaHome/>
  },
  {
    name:"Projects",
    link:'/projects',
    icon:<FaHome/>
  },
  {
    name:"Work Experience",
    link:'/work-experience',
    icon:<FaHome/>
  },
]

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecenProjects/>
        <Clients/>
        <Experience/>
        <Approach/>
        <Footer />
      </div>
    </main>
  );
}
