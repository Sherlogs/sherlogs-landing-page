import React from "react";
import dockerLogo from '../assets/docker-logo.png';
import displayLogs from '../assets/display-logs.gif';
import filter from '../assets/filter.gif';
import search from '../assets/search.gif';
import quickLogger from '../assets/quick-logger.png';

export default function Features() {
    return(
        <div className= 'flex flex-col items-center text-black font-semibold text-2xl m-16'>
            <h1 className='font-black text-5xl text-main'>Features</h1>
            
            <div className='flex space-x-5 my-6 w-5/6 rounded-2xl shadow-lg p-8 bg-white'>
            <img className='px-4 w-2/3' src={displayLogs} alt='log display example'></img>
                <div className='pl-4'>
                    <h2>View your logs in the Sherlogs dashboard</h2>
                    <p className='font-normal text-xl pt-4 text-gray'>See a history of your logs complete with the date and time at which the log was created, the log level, and the log message.</p>
                </div>
            </div>
            
            <div className='flex space-x-5 my-6 w-5/6 rounded-2xl shadow-lg p-8 bg-white'>
                <img className='px-4 w-2/3' src={filter} alt='filter example'></img>
                <div>
                    <h2>Filter logs by time and level</h2>
                    <p className='font-normal text-xl pt-4 text-gray'>View logs from a chosen time period such as the last hour or the last week.  Display logs of a specific level such as "error" or "info".  Mix and match filters to refine your search.</p>
                </div>
            </div>

            <div className='flex space-x-5 my-6 w-5/6 rounded-2xl shadow-lg p-8 bg-white'>
            <img className='px-4 w-2/3' src={search} alt='search example'></img>
                <div>
                    <h2>Search through logs for key words</h2>
                    <p className='font-normal text-xl pt-4 text-gray'>View logs that contain a specific word or phrase of interest.</p>
                </div>
            </div>

            <div className='flex space-x-5 my-6 w-5/6 rounded-2xl shadow-lg p-8 bg-white'>
                <img className='px-4 w-[400px]' src={quickLogger} alt='quick logger example'></img>
                <div>
                    <h2>Collect logs using our custom logger</h2>
                    <p className='font-normal text-xl pt-4 text-gray'>Add our custom logger to any Node.js application to quickly and easily send logs to Sherlogs.  Customize the log levels and messages you wish to receive.</p>
                    <p className='font-normal text-xl pt-4 text-gray'>Check out Quick Logger BE <a href='https://www.quickloggerbe.com/' target='_blank' rel='noopener noreferrer' className='text-main font-semibold'>HERE</a>!</p>
                </div>
            </div>

            <div className='flex space-x-5 my-6 w-5/6 rounded-2xl shadow-lg p-8 bg-white'>
                <img className='px-4 w-[400px]' src={dockerLogo} alt='docker-logo'></img>
                <div>
                    <h2>Run on any computer</h2>
                    <p className='font-normal text-xl pt-4 text-gray'>Sherlogs is containerized with Docker to bring developers the same experience, regardless of your operating system.</p>
                </div>
            </div>
      </div>
      
    )
}