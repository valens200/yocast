import { TextField } from '@mui/material'
import React from 'react'
import logo from "../../assets/images/logo.png"
import { FormInputs } from '../../assets/staticAssets/data'
import FirstInputs from '../../components/authenticationComponents/FirstInputs'
import SecondInputs from '../../components/authenticationComponents/SecondInputs'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import AuthNavigation from '../../components/authenticationComponents/AuthNavigation'
import Footer from '../../components/homeComponents/Footer'
import Header from '../../components/authenticationComponents/Header'
function Signup() {
    const next = useSelector((store: RootState) => store.page.next);
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    return (
        <div className={isDarkMode ? 'h-screen font-poppins font-sans  flex-col  flex items-center  bg-[#1a1d21] ' : 'h-screen font-poppins font-sans  flex-col  flex items-center  bg-[white] '}>
            <div className='h-[5%] w-[100%]'>
                <AuthNavigation />
            </div>
            <div className='h-[95%] w-[100%] flex items-center justify-center'>
                <div className={isDarkMode ? 'md:w-[30%]  w-[95%] rounded   bg-[#212529] h-[60%] mx-auto mx-auto' : 'md:w-[30%]  w-[95%] rounded   bg-[#f3f3f9] h-[60%] mx-auto mx-auto'}>
                    <div className=" p-5 flex  text-white space-y-2 flex-col justify-center text-center">
                        <img className='w-[20%]  flex mx-auto' src={logo} alt="" />
                        <div className='flex flex-col space-y-3'>
                            <Header />
                            <div className={isDarkMode ? 'text-[0.80rem] font-poppins font-sans' : 'text-[0.80rem] text-black font-poppins font-sans'}>
                                <p>Sign up with your  <span className='text-[#0ab39c] mx-2 underline'>Yocast</span>  </p>
                                <p> to start managing your podcasts.</p>
                            </div>
                        </div>
                    </div>
                    {!next ? <FirstInputs /> : <SecondInputs />}
                </div>
            </div>
            <div className='bottom-0 w-[100%]'>
                <Footer />

            </div>

        </div>
    )
}

export default Signup