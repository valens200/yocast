import { TextField } from '@mui/material'
import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import { FormInputs } from '../../assets/staticAssets/data'
import { Slide } from 'react-awesome-reveal'
import { Fade } from 'react-awesome-reveal'
import { setNext } from '../../features/pageSlice'
import { RootState, useAppDispatch } from '../../store'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function SecondInputs() {
    const dispatch = useAppDispatch();
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode)
    return (
        <Fade className='w-[100%] h-[100%]  mx-auto'>
            <div className='w-[100%] h-[100%] flex flex-col space-y-4  mx-auto'>
                {FormInputs.slice(2, 4).map((input, index) => {
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
                <div className='md:w-[95%] w-[90%] h-[12%] flex flex-row justify-between  mx-auto'>
                    <button onClick={() => dispatch(setNext(false))} className='bg-[#0ab39c]  h-[100%] w-[18%] rounded  text-[#fff] hover:bg-[#099885]'>Back</button>
                    <Link className='bg-[#0ab39c]  h-[100%] w-[80%] rounded  text-[#fff] hover:bg-[#099885]' to="/dashboard"><button className='bg-[#0ab39c]  h-[100%] w-[100%] rounded  text-[#fff] hover:bg-[#099885]'>Signup</button></Link>
                </div>
            </div>

        </Fade>
    )
}

export default SecondInputs