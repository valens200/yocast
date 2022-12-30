import { Store } from '@mui/icons-material'
import { PayloadAction } from '@reduxjs/toolkit'
import React from 'react'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5"
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store'
import { setIsDarkMode } from '../../features/pageSlice'
function AuthNavigation() {
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode)
    const dispatch = useAppDispatch();
    return (
        <div className='flex w-[96%] items-center h-[100%] justify-end text-white'>
            <div className={isDarkMode ? 'w-[5%]  text-3xl flex justify-end' : 'w-[5%] text-[#212529]  text-3xl flex justify-end'}>
                {isDarkMode ? <IoSunnyOutline className='hover:bg-[#405189] rounded-full' onClick={() => dispatch(setIsDarkMode("white"))} /> : <IoMoonOutline className='hover:bg-[#405189] rounded-full' onClick={() => dispatch(setIsDarkMode("dark"))} />}
            </div>
        </div>
    )
}

export default AuthNavigation