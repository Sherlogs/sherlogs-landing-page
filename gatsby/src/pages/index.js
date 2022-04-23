import React from "react";
import './index.css';
import logo from '../assets/logo-white.png'
import Team from "../components/team";
import Features from '../components/features';

export default function Home() {
  return(
    <div className='font-source_sans bg-slate'>
      <div className='flex flex-col items-center bg-gradient-to-b from-darker to-main_fifty p-16'>
        <img className='mt-16' src={logo} alt='logo'></img>
        <h1 className='text-white text-4xl m-16 font-semibold'>View and search through your logs with ease</h1>
        <a className='border-2 p-4 bg-main_twenty rounded-lg text-white text-3xl bg-main_fifty font-semibold' href="https://github.com/oslabs-beta/Sherlogs">Check it out on Github</a>
      </div>
     
      <Features></Features>
      <Team></Team>
    </div>
  ) 
}
