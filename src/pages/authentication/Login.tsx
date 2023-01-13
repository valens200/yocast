import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/logo.png"
import { FormInputs } from '../../assets/staticAssets/data'
import { Link } from 'react-router-dom'
import AuthNavigation from '../../components/authenticationComponents/AuthNavigation'
import Footer from '../../components/homeComponents/Footer'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { baseUrl } from '../../assets/staticAssets/data'
import Header from '../../components/authenticationComponents/Header'
import FirstInputs from '../../components/authenticationComponents/FirstInputs'
import { initializeUser } from '../../features/userSlice'
import { useAppDispatch } from '../../store'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImFacebook2 } from 'react-icons/im'
import { FcGoogle } from 'react-icons/fc'
import { GrLinkedin } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'
import axios from 'axios'
function Login() {
    const numbers = [1, 2, 3, 4];
    const icons = [<ImFacebook2 className='w-[100%] h-[100%] text-[#0ab39c]' />, <FcGoogle className='w-[100%] h-[100%] text-[#0ab39c]' />, <GrLinkedin className='w-[100%] h-[100%] text-[#0ab39c]' />, <BsInstagram className='w-[100%] h-[100%] text-[#0ab39c]' />]
    const dispatch = useAppDispatch();
    const [loggedin, setLoggedIn] = useState<boolean>(false);
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const userToLogin = useSelector((store: RootState) => store.user.user);
    const navigate = useNavigate();
    const login = () => {
        const inputs = [userToLogin.Email, userToLogin.Password];
        if (userToLogin.Password === "" || userToLogin.Password == null) {
            toast.error("Password is required, can not be empty");
            return;
        }
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i] == "" || inputs[i] == null) {
                toast.error("All the fields are  required, can not be empty");
                return;
            }
        }
        axios({
            method: 'POST',
            url: baseUrl + "/signin",
            data: {
                email: userToLogin.Email,
                password: userToLogin.Password,
            },
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        }).then((response) => {
            setLoggedIn(true)
            console.log(response)
            localStorage.setItem("user", JSON.stringify(response.data.user))
            toast.success("You loggedin successfully")
            if (response.data.statusCode === 200) {
                navigate("/dashboard")
            }
        }).catch((error) => {
            console.log(error)
            if (error.response.data.error.statusCode == 400) {
                toast.error("invalid email or password")
            } else {
                toast.info("Internal server error")
            }
        })
    }



    return (
        <div className='h-screen font-poppins font-sans  flex-col  flex items-center'>
            <ToastContainer />
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
                <div className='md:w-[25%]  text-black flex items-center shadow-xl border w-[95%] flex rounded    h-[58%]  mx-auto ' >
                    <div className="flex  w-[90%] mx-auto  h-[90%]  space-y-5 flex-col text-center">
                        <div className='text-black  h-[10%]'>
                            <h1 className='text-[#405189]'>Welcome Back !</h1>
                            <p className='text-[#878A99] font-poppins font-sans' >Sign in to continue to Yocast.</p>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className="h-[90%]  flex flex-col space-y-3 w-[100%] ">
                            {FormInputs.slice(1, 4).map((input, index) => {
                                if (input.name == 'Password') {
                                    return (
                                        <div key={index} className='h-[18%] w-[95%] mx-auto '>
                                            <div className='h-[10%] flex justify-between'>
                                                <p className='text-start font-poppins font-sans text-[0.90rem]  text-[#212529]'>{input.name} <span className='text-[#F06548]' >*</span></p>
                                                <p className='text-start font-poppins font-sans text-[0.90rem]  text-[#878A99]'>Forgot password</p>
                                            </div>
                                            <div className='mt-8 w-[100%]  h-[53%]'>
                                                <input onChange={(e) => dispatch(initializeUser({ key: input.name, value: e.target.value }))} type={input.type} className='h-[100%]  text-[#878A99] border text-[0.80rem] pl-3 focus:outline-0  w-[100%]' placeholder={"Enter " + input.name} />
                                            </div>
                                        </div>
                                    )
                                }
                                if (index == 1) {
                                    return null;
                                }
                                return (
                                    <div key={index} className='w-[95%]  flex flex-col  mx-auto space-y-2  h-[18%]'>
                                        <label className='text-start font-poppins font-sans text-[0.90rem]  text-[#212529]' htmlFor="">{input.name} <span className='text-[#F06548]' >*</span></label>
                                        <input onChange={(e) => dispatch(initializeUser({ key: input.name, value: e.target.value }))} type="text" className='h-[100%] text-[#878A99] border text-[0.80rem] pl-3 focus:outline-0  w-[100%]' placeholder={"Enter " + input.name} />
                                    </div>
                                )
                            })}
                            <div className='h-[15%] flex items-center  w-[95%] mx-auto'>
                                <button onClick={login} className='bg-[#0ab39c] text-center items-center font-bold  h-[80%] w-[100%] rounded  text-[#fff] hover:bg-[#099885]'>Signin</button>
                            </div>
                            <div className=' flex w-[95%] mx-auto'>
                                <div className='border-[0.01rem]  h-[20%] border-t-0 border-x-0  border-dashed  w-[35%]'>
                                </div>
                                <div className='w-[30%]'>
                                    <p>Sign in with</p>
                                </div>
                                <div className='w-[35%] h-[20%] border-t-0 border-x-0 border-[0.01rem] border-dashed'>
                                </div>
                            </div>
                            <div className='h-[19%] flex  justify-center   w-[50%] mx-auto'>
                                {icons.map((icon, index) => (
                                    <div key={index} className='w-[20%]  hover:cursor-pointer h-[60%] border'>
                                        <p className='w-[100%] h-[100%]'>{icon}</p>
                                    </div>
                                ))}
                            </div>

                        </form>

                    </div>

                </div>
                <div className=' flex w-[95%] mx-auto'>
                    <p className='text-center w-[100%] text-[0.80rem]'>Don't have an account ? <Link to="/auth/signup"><span className='text-[#405189] font-bold hover:cursor-pointer underline ml-1'>signup</span></Link></p>
                </div>
            </div>
            <div className='w-[100%] h-[2%]'>
                <Footer />
            </div>
        </div>
    )
}

export default Login