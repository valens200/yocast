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
        <Fade className='w-[100%] h-[60%]  mx-auto'>
            <div className='w-[100%] h-[100%] flex flex-col space-y-4  mx-auto'>
                {FormInputs.slice(3, 5).map((input, index) => (
                    <div className='md:w-[80%] w-[90%] mx-auto'>
                        <TextField placeholder={input.name} sx={{ input: { color: '#0ab39c' } }} className={ isDarkMode ? 'w-[100%] bg-[#1a1d21]  textfield text-[white] focus:outline-0':'w-[100%] textfield  bg-[#f3f3f9]  text-[white] focus:outline-0'} type={input.type} label={input.name} variant="outlined" />
                    </div>
                ))}
                <div className='md:w-[80%] w-[90%] h-[14%] flex flex-row justify-between  mx-auto'>
                    <button onClick={() => dispatch(setNext(false))} className='bg-[#0ab39c]  h-[100%] w-[18%] rounded  text-[#fff] hover:bg-[#099885]'>Back</button>
                    <Link className='bg-[#0ab39c]  h-[100%] w-[80%] rounded  text-[#fff] hover:bg-[#099885]'  to="/dashboard"><button className='bg-[#0ab39c]  h-[100%] w-[100%] rounded  text-[#fff] hover:bg-[#099885]'>Signup</button></Link>
                </div>
                <div className='md:w-[80%] w-[90%] font-poppins font-sans text-[0.80rem] text-[#7c7f90]  text-center mx-auto'>
                    Already have an account? please signin in our mobile app, or take a look at   <Link to="/"><span className='text text-[#0ab39c]'>yocast signin</span></Link>.
                </div>
            </div>

        </Fade>
    )
}

export default SecondInputs