import { TextField } from '@mui/material'
import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import { FormInputs } from '../../assets/staticAssets/data'
import { Link } from 'react-router-dom'
import AuthNavigation from '../../components/authenticationComponents/AuthNavigation'
import Footer from '../../components/homeComponents/Footer'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
function Login() {
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    return (
        <div className={isDarkMode ? 'h-screen font-poppins font-sans  flex-col  flex items-center  bg-[#1a1d21] ' : 'h-screen font-poppins font-sans  flex-col  flex items-center  bg-[white] '}>
            <div className='h-[5%] w-[100%]'>
                <AuthNavigation />
            </div>
            <div className='h-[95%] flex items-center justify-center w-[100%]'>
                <div className={isDarkMode ? 'md:w-[30%]  w-[95%] rounded   bg-[#212529] h-[60%] mx-auto mx-auto' : 'md:w-[30%]  w-[95%] rounded   bg-[#f3f3f9] h-[60%] mx-auto mx-auto'}>
                    <div className=" p-5 flex  text-white space-y-2 flex-col justify-center text-center">
                        <img className='w-[20%]  flex mx-auto' src={logo} alt="" />
                        <div className='flex flex-col space-y-3'>
                            <h1 className={isDarkMode ? 'text-3xl uppercase font-poppins font-bold' : 'text-3xl text-black uppercase font-poppins font-bold'}>yocast</h1>
                            <div className={isDarkMode ? 'text-[0.80rem] font-poppins font-sans' : 'text-[0.80rem] text-black font-poppins font-sans'}>
                                <p>Sign in with your  <span className='text-[#0ab39c] mx-2 underline'>Yocast</span> account </p>
                                <p> to start listening</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] h-[60%] flex flex-col space-y-4  mx-auto'>
                    {/* bg-[#f3f3f9] */}
                        {FormInputs.slice(0, 2).map((input, index) => (
                            <div className='w-[80%] mx-auto'>
                                <TextField  placeholder={input.name} sx={{ input: { color: '#0ab39c' } }} className={ isDarkMode ? 'w-[100%] bg-[#1a1d21]  textfield text-[white] focus:outline-0':'w-[100%] textfield  bg-[#f3f3f9]  text-[white] focus:outline-0'} type={input.type} label={input.name} variant="outlined" />
                            </div>
                        ))}
                        <div className='w-[80%] font-poppins font-sans flex justify-end mx-auto h-[10%]'>
                            <Link to="/auth/reset_password"><p className='text-[0.80rem] text-[#0ab39c] underline hover:text-white hover:cursor-pointer'>Forgot password</p></Link>
                          </div>
                        <div className='w-[80%] h-[14%]  mx-auto'>
                            <button className='bg-[#0ab39c]  h-[100%] w-[100%] rounded  text-[#fff] hover:bg-[#099885]'>Login</button>
                        </div>
                        <div className='w-[80%] font-poppins font-sans text-[0.80rem] text-[#7c7f90]  text-center mx-auto'>
                            Don't have an account? Create one in our mobile app, or take a look at   <Link to="/auth/signup"><span className='text text-[#0ab39c]'>yocast signup</span></Link>.
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-[100%]'>
                <Footer />
            </div>
        </div>
    )
}

export default Login