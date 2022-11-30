import React from 'react'
import { navButtons, Links } from '../assets/data'
import logoo from "../assets/images/logo.png"
import { FiMenu } from "react-icons/fi"
import { setShowNavigation } from '../features/pageSlice'
import { useAppDispatch } from '../store'
import { Link } from 'react-router-dom'
function Navigation() {

    const dispatch = useAppDispatch();
    const getClass = (index: number) => {
        if (index == 1) {
            return "text-white bg-black hover:bg-white hover:text-black hover:border  h-[4vh] md:w-[6vw]  rounded-full";
        } else {
            return "hover:text-[grey]"
        }
    }
    return (
        <div className='w-[100%] border border-x-0 border-t-0 h-[100%] flex items-center mt-5'>
            <div className=' w-[80%] items-center mx-auto justify-between flex flex-row '>
                <div className='flex w-[20%] items-center flex-row space-x-2'>
                    <img className='w-[20%]' src={logoo} />
                    <p className='font-dancing font-bold text-3xl'>Bookmarker</p>
                </div>
                <div className='w-[60%] md:flex hidden items-center flex-row justify-center space-x-5 '>
                    {Links.map((link, index) => (
                        <div key={index}>
                            <p className='hover:text-[grey] hover:cursor-pointer'>{link.name}</p>
                        </div>
                    ))}

                </div>
                <div className='md:hidden flex justify-end float-right w-[20%] text-4xl font-bold items-center'>
                    <FiMenu onClick={() => dispatch(setShowNavigation(true))} />
                </div>
                <div className='w-[20%] md:flex hidden flex-row space-x-4'>
                    {navButtons.map((btn, index) => (
                        <div className={getClass(index)}>
                            <Link key={index} to="/dashboard">
                                <button  className='w-[100%] h-[100%]'>{btn.name}</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navigation