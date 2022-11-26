import React from 'react'
import { AiOutlineSearch, AiFillCaretDown, AiFillHome } from "react-icons/ai"
import { IoNotifications } from "react-icons/io5"
import { RootState, useAppDispatch } from '../store'
import { useSelector } from 'react-redux'
import { setShowForm } from '../features/BookMarkSlice'

function Account() {
    const selectedCategory = useSelector((store : RootState) => store.bookmarks.selectedCategory)
    const dispatch = useAppDispatch();
    
    return (
        <div   className='w-[100%]  flex flex-row  justify-between mt-8 mx-auto'>
            <div className='w-[80%]'>
                <div className='bg-[grey] rounded-full md:w-[40%] h-[5vh]  relative flex flex-row justify-between'>
                    <input type="text" className='bg-[#D3D3E8] focus:outline-0 rounded-full p-4 w-[100%] h-[100%]' placeholder="Search ...." />
                    <AiOutlineSearch className='w-[10%] text-[grey] right-3 mt-2 text-[2.5rem] absolute' />
                </div>
            </div>
            <div className='flex justify-end  float-right flex-row'>
                <div className='flex  items-center space-x-4 flex-row ' >
                    <AiFillHome className='text-[1.5rem] text-[#D3D3E8]' />
                    <p className='text-[1.5rem] text-[#D3D3E8]'> <IoNotifications /> </p>
                    <span className='translate-x-[2vw] absolute text-[black]  bg-white border shadow-lg rounded-full font-bold'>10</span> 
                </div>
                <div className='flex space-x-3 items-center ml-4 flex-row'>
                    <p>valens</p>
                    <AiFillCaretDown />
                    <img  className="w-[30%] h-[90%] rounded-full " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNL-tDETnOkV-m0Js-guvKltHPQaMuxEmLuw&usqp=CAU' />
                </div>

            </div>
        </div>
    )
}

export default Account