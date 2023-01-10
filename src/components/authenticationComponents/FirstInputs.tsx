import { TextField } from '@mui/material'
import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import { FormInputs } from '../../assets/staticAssets/data'
import { Link } from 'react-router-dom'
import { RootState, useAppDispatch } from '../../store'
import { setNext } from '../../features/pageSlice'
import { Fade } from 'react-awesome-reveal'
import { useSelector } from 'react-redux'
function FirstInputs() {
    const dispatch = useAppDispatch();
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode)
    const isNext = useSelector((store: RootState) => store.page.next)
    return (
        <Fade className='w-[100%] h-[100%] mx-auto'>
            <div className='w-[100%] h-[100%] flex flex-col space-y-4  mx-auto'>
                {FormInputs.slice(0, 3).map((input, index) => {
                    if (input.name == 'Password') {
                        return (
                            <div className='h-[22%] w-[95%] mx-auto '>
                                <div className='h-[10%] flex justify-between'>
                                    <p>{input.name}</p>
                                    <p>Forgot password</p>
                                </div>
                                <div className='mt-8 w-[100%]  h-[53%]'>
                                    <input type="text" className='h-[100%]  text-[#878A99] border text-[0.80rem] pl-3 focus:outline-0  w-[100%]' placeholder={"Enter " + input.name} />
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div key={index} className='w-[95%]  flex flex-col  mx-auto space-y-2  h-[22%]'>
                            <label className='text-start' htmlFor="">{input.name}</label>
                            <input type="text" className='h-[100%] text-[#878A99] border text-[0.80rem] pl-3 focus:outline-0  w-[100%]' placeholder={"Enter " + input.name} />
                        </div>
                    )
                })}
                <div className='w-[95%] md:w-[95%] flex justify-end h-[12%]  mx-auto'>
                    <button onClick={() => dispatch(setNext(true))} className='bg-[#0ab39c]  h-[100%] w-[20%] rounded  text-[#fff] hover:bg-[#099885]'>Next</button>
                </div>
            </div>

        </Fade>
    )
}

export default FirstInputs