import React from "react";
import crystal from '../assets/profile_pic_cp.png'
import andres from '../assets/profile_pic_ag.png'
import kylene from '../assets/profile_pic_kh.jpeg'
import felicity from '../assets/profile_pic_fn.jpeg'

export default function Team() {
    return(
        <div className='flex'>
            <div className='flex flex-col items-center mx-12'>
                <img className='rounded-full w-48 my-2' src={andres}></img>
                <h3 className='text-white text-3xl font-medium'>Andrés Gutiérrez</h3>
                <a className='text-white text-2xl' href='https://github.com/Agfeynman'>@Agfeynman</a>
            </div>
            <div className='flex flex-col items-center mx-12'>
                <img className='rounded-full w-48 my-2' src={kylene}></img>
                <h3 className='text-white text-3xl font-medium'>Kylene Hohman</h3>
                <a className='text-white text-2xl' href='https://github.com/velveteen-ant'>@velveteen-ant</a>
            </div>
            <div className='flex flex-col items-center mx-12'>
                <img className='rounded-full w-48 my-2' src={felicity}></img>
                <h3 className='text-white text-3xl font-medium'>Felicity Nguyen</h3>
                <a className='text-white text-2xl' href='https://github.com/felisity09'>@felisity09</a>
            </div>
            <div className='flex flex-col items-center mx-12'>
                <img className='rounded-full w-48 my-2' src={crystal}></img>
                <h3 className='text-white text-3xl font-medium'>Crystal Pederson</h3>
                <a className='text-white text-2xl' href='https://github.com/crystalpederson'>@crystalpederson</a>
            </div>
        </div>
    )
}