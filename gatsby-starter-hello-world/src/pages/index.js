import React from "react";
import './index.css';
import logo from '../assets/logo-white.png'
import Team from "../components/team";

export default function Home() {
  return(
    <div className='font-source_sans'>
      <div className='flex flex-col items-center bg-gradient-to-b from-darker to-main_fifty p-16'>
        <img className='mt-16' src={logo} alt='logo'></img>
        <h1 className='text-white text-4xl m-16 font-semibold'>View and search through your logs with ease</h1>
        <a className='border-2 p-4 bg-main_twenty rounded-lg text-white text-2xl bg-main_fifty font-semibold' href="https://github.com/oslabs-beta/Sherlogs">Check it out on Github</a>
      </div>
      <div className= 'flex flex-col items-center text-gray font-medium text-4xl m-16'>
        <h2 className='my-8'>View your logs in the Sherlogs dashboard</h2>
        <h2 className='my-8'>Filter logs by time and level</h2>
        <h2 className='my-8'>Search through logs for key words</h2>
        <h2 className='my-8'>Collect logs using our custom logger</h2>
      </div>
      <div className='flex flex-col items-center bg-gradient-to-t from-main to-main_fifty p-16'>
        <h1 className='text-white text-5xl m-2 mb-8 font-source_sans font-black'>Meet the Sherlogs Team</h1>
        <Team></Team>
      </div>
    </div>
  ) 
}
