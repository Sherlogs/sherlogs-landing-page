import React from "react";
import './index.css';
import logo from '../assets/logo-white.png'
import Team from "../components/team";
import Features from '../components/features';

export default function Home() {
  return(
    <div className='font-source_sans bg-slate'>
      <div className='flex flex-col items-center bg-gradient-to-b from-darker to-main_fifty p-16'>
        <img className='mt-6 w-1/4' src={logo} alt='logo'></img>
        <h1 className='text-white text-2xl m-8 font-semibold'>View and search through your logs with ease</h1>
        <a className='p-2 bg-main rounded-lg drop-shadow-lg text-white text-xl font-semibold hover:bg-white hover:text-main' href="https://github.com/oslabs-beta/Sherlogs">Check it out on Github</a>
      </div>
     
      <Features></Features>
      <Team></Team>
    </div>
  ) 
}
