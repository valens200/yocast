import { TextField } from '@mui/material'
import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import { FormInputs } from '../../assets/staticAssets/data'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../store'
import { setNext } from '../../features/pageSlice'
import { Fade } from 'react-awesome-reveal'
function FirstInputs() {
    const dispatch = useAppDispatch();
    return (
        <Fade  className='w-[100%] h-[60%] mx-auto'>
            <div className='w-[100%] h-[100%] flex flex-col space-y-4  mx-auto'>
                {FormInputs.slice(0, 3).map((input, index) => (
                    <div className='w-[90%] md:w-[80%] mx-auto'>
                        <TextField placeholder={input.name} sx={{ input: { color: '#0ab39c' } }} className='w-[100%] textfield text-[white] focus:outline-0' type={input.type} label={input.name} variant="outlined" />
                    </div>
                ))}
                <div className='w-[90%] md:w-[80%] flex justify-end h-[12%]  mx-auto'>
                    <button onClick={() => dispatch(setNext(true))} className='bg-[#0ab39c]  h-[100%] w-[20%] rounded  text-[#fff] hover:bg-[#099885]'>Next</button>
                </div>
                <div className=' w-[90%] md:w-[80%] font-poppins font-sans text-[0.80rem] text-[#7c7f90]  text-center mx-auto'>
                    Already have an account? please signin in our mobile app, or take a look at   <Link to="/"><span className='text text-[#0ab39c]'>yocast login</span></Link>.
                </div>
            </div>

        </Fade>
    )
}

export default FirstInputs