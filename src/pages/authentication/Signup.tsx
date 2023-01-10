import { TextField } from '@mui/material'
import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import { FormInputs } from '../../assets/staticAssets/data'
import { Link } from 'react-router-dom'
import AuthNavigation from '../../components/authenticationComponents/AuthNavigation'
import Footer from '../../components/homeComponents/Footer'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Header from '../../components/authenticationComponents/Header'
import FirstInputs from '../../components/authenticationComponents/FirstInputs'
import { initializeUser } from '../../features/userSlice'
import { useAppDispatch } from '../../store'
function Signup() {
    const numbers = [1, 2, 3, 4];
    const dispatch = useAppDispatch();
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    return (
        <div className='h-screen font-poppins font-sans  flex-col  flex items-center'>
            <div className='h-[98%] flex flex-col space-y-9 items-center justify-center w-[100%]'>
                <div className='flex flex-col'>
                    <img className='w-[20%]  flex mx-auto' src={logo} alt="" />
                    <div className='flex flex-col space-y-3'>
                        <Header />
                        <div className='text-[0.80rem] text-center font-poppins font-sans' >
                            <p>Sign in with your  <span className='text-[#0ab39c] font-sans mx-2 underline'>Yocast</span> account </p>
                            <p> to start listening</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-[25%]  text-black flex items-center shadow-xl border w-[95%] flex rounded    h-[68%]  mx-auto ' >
                    <div className="flex  w-[90%] mx-auto  h-[90%]  space-y-5 flex-col text-center">
                        <div className='text-black text-[0.90rem]  h-[5%]'>
                            <h1 className='text-[#405189]'>Create new account</h1>
                            <p className='text-[#878A99] font-poppins font-sans'>Get your free yocast account now.</p>
                        </div>
                        <form className="h-[95%]  flex flex-col space-y-3 w-[100%] ">
                            {FormInputs.map((input, index) => {
                                return (
                                    <div key={index} className='w-[95%] font-poppins font-sans  flex flex-col  mx-auto space-y-2  h-[22%]'>
                                        <label className='text-start font-poppins font-sans text-[0.90rem]  text-[#212529]' htmlFor="">{input.name} <span className='text-[#F06548]'>*</span></label>
                                        <input onChange={(e) => dispatch(initializeUser({ key: input.name, value: e.target.value }))} type={input.type} className='h-[100%] text-[black] border text-[0.80rem] pl-3 focus:outline-0  w-[100%]' placeholder={"Enter " + input.name} />
                                    </div>
                                )
                            })}
                            <div className='h-[19%] flex items-center  w-[95%] mx-auto'>
                                <Link className='bg-[#0ab39c]  h-[60%] font-bold w-[100%] rounded  text-[#fff] hover:bg-[#099885]' to="/dashboard"><button className='bg-[#0ab39c]  h-[80%] w-[100%] rounded  text-[#fff] hover:bg-[#099885]'>Signup</button></Link>
                            </div>
                            <div className=' flex w-[95%] mx-auto'>
                                <div className='border-[0.01rem]  h-[20%] border-t-0 border-x-0  border-dashed  w-[30%]'>
                                </div>
                                <div className='w-[40%] '>
                                    <p className='text-[#878A99]  -translate-y-[30%] text-[0.90rem] '>Create account with</p>
                                </div>
                                <div className='w-[30%] h-[20%] border-t-0 border-x-0 border-[0.01rem] border-dashed'>
                                </div>
                            </div>
                            <div className='h-[19%] flex  justify-center   w-[50%] mx-auto'>
                                {numbers.map((nrb, index) => (
                                    <div className='w-[20%] h-[60%] bg-black border'></div>
                                ))}
                            </div>

                        </form>

                    </div>

                </div>
                <div className=' flex w-[95%] mx-auto'>
                    <p className='text-center w-[100%] text-[0.80rem]'>Already have an account ? <Link to="/"><span className='text-[#405189] font-bold hover:cursor-pointer underline ml-1'>Signin</span></Link></p>
                </div>
            </div>
            <div className='w-[100%] h-[2%]'>
                <Footer />
            </div>
        </div>
    )
}

export default Signup