import React from 'react'
import { navButtons } from '../assets/data'
import logoo from "../assets/images/logoo.png"
function Navigation() {
    console.log(navButtons)

    const getClass = (index : number) => {
        if(index == 1){
            return "text-white bg-black  h-[4vh] w-[40%] rounded-full";
        }else{
            return ""
        }
    }
    return (
        <div className='w-[100%] border border-x-0 border-t-0 h-[100%] flex items-center mt-5'>
            <div className=' w-[80%] items-center mx-auto flex flex-row '>
                <div className='flex w-[20%] items-center flex-row space-x-2'>
                    <img className='w-[20%]' src={logoo} />
                    <p>Bookmarker</p>
                </div>
                <div className='w-[60%]'>

                </div>
                <div className='w-[20%] flex flex-row space-x-4'>
                    {navButtons.map((btn, index) => (
                        <button  className={getClass(index)} key={index}>{btn.name}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navigation