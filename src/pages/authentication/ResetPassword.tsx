import { TextField } from '@mui/material'
import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import { FormInputs } from '../../assets/staticAssets/data'
import { Link } from 'react-router-dom'
import AuthNavigation from '../../components/authenticationComponents/AuthNavigation'
import Footer from '../../components/homeComponents/Footer'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
function ResetPassword() {
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    return (
        <div className={isDarkMode ? 'h-screen font-poppins font-sans  flex-col  flex items-center  bg-[#1a1d21] ' : 'h-screen font-poppins font-sans  flex-col  flex items-center  bg-[white] '}>
            <div className='h-[5%] w-[100%]'>
                <AuthNavigation />
            </div>
            <div className='h-[95%] w-[100%] flex items-center justify-center'>
                <div className={isDarkMode ? 'md:w-[30%]  w-[95%] rounded   bg-[#212529] h-[60%] mx-auto mx-auto' : 'md:w-[30%]  w-[95%] rounded   bg-[#f3f3f9] h-[60%] mx-auto mx-auto'}>
                    <div className=" p-5 flex  text-white space-y-2 flex-col justify-center text-center">
                        <img className='w-[20%]  flex mx-auto' src={logo} alt="yocast logo" />
                        <div className='flex flex-col space-y-3'>
                            <h1 className={isDarkMode ? 'text-3xl uppercase font-poppins font-bold' : 'text-3xl text-black uppercase font-poppins font-bold'}>yocast</h1>
                            <div className={isDarkMode ? 'text-[0.80rem] font-poppins font-sans' : 'text-[0.80rem] text-black font-poppins font-sans'}>
                                <h1 className='text-2xl font-sans font-poppins '>Forgot Your Password?</h1>
                                <p className='text-[0.70rem] md:text-[0.90rem] text-[#7c7f90]'>Please enter your email address. or not my  <span className='text-[#0ab39c] md:mx-2 underline'>Yocast</span> account </p>
                                <p className='text-[0.70rem] md:text-[0.90rem] text-[#7c7f90]'>We'll  send you some password reset instructions.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] h-[60%] flex flex-col space-y-4  mx-auto'>
                        {FormInputs.slice(0, 1).map((input, index) => (
                            <div className=' w-[90%] md:w-[80%] mx-auto'>
                                <TextField placeholder={input.name} sx={{ input: { color: '#0ab39c' } }} className='w-[100%] textfield text-[white] focus:outline-0' type={input.type} label={input.name} variant="outlined" />
                            </div>
                        ))}
                        <div className=' w-[90%] md:w-[80%] h-[14%]  mx-auto'>
                            <button className='bg-[#0ab39c]  h-[100%] w-[100%] rounded  text-[#fff] hover:bg-[#099885]'>Get codes</button>
                        </div>
                        <div className=' w-[90%] md:w-[80%] font-poppins font-sans text-[0.80rem] text-[#7c7f90]  text-center mx-auto'>
                            <Link to="/auth/signup"><span className='text text-[#0ab39c]'>yocast signin.</span></Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bottom-0 w-[100%]'>
                <Footer />

            </div>
        </div >
    )
}

export default ResetPassword