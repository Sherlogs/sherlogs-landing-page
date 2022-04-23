import React from "react";
import crystal from '../assets/profile_pic_cp.png'
import andres from '../assets/profile_pic_ag.png'
import kylene from '../assets/profile_pic_kh.jpeg'
import felicity from '../assets/profile_pic_fn.jpeg'

export default function Team() {
    return(
        <div className='flex flex-col items-center bg-gradient-to-t from-main to-main_fifty p-16'>
            <h1 className='text-white text-5xl m-2 mb-8 font-source_sans font-black'>Meet the Sherlogs Team</h1>
            
            <div className='flex flex-wrap'>
                <div className='flex flex-col items-center mx-12'>
                    <img className='rounded-full w-48 my-2' src={andres} alt='profile photo'></img>
                    <h3 className='text-white text-3xl font-medium'>Andrés Gutiérrez</h3>
                    <a className='text-white text-2xl' href='https://github.com/Agfeynman'>@Agfeynman</a>
                </div>
                <div className='flex flex-col items-center mx-12'>
                    <img className='rounded-full w-48 my-2' src={kylene} alt='profile photo'></img>
                    <h3 className='text-white text-3xl font-medium'>Kylene Hohman</h3>
                    <a className='text-white text-2xl' href='https://github.com/velveteen-ant'>@velveteen-ant</a>
                </div>
                <div className='flex flex-col items-center mx-12'>
                    <img className='rounded-full w-48 my-2' src={felicity} alt='profile photo'></img>
                    <h3 className='text-white text-3xl font-medium'>Felicity Nguyen</h3>
                    <a className='text-white text-2xl' href='https://github.com/felisity09'>@felisity09</a>
                </div>
                <div className='flex flex-col items-center mx-12'>
                    <img className='rounded-full w-48 my-2' src={crystal} alt='profile photo'></img>
                    <h3 className='text-white text-3xl font-medium'>Crystal Pederson</h3>
                    <a className='text-white text-2xl' href='https://github.com/crystalpederson'>@crystalpederson</a>
                </div>
            </div>
        </div>
    )
}