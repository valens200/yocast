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
import axios from 'axios'
import { baseUrl } from '../../assets/staticAssets/data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import {ImFacebook2} from 'react-icons/im'
import {FcGoogle} from 'react-icons/fc'
import {GrLinkedin} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
function Signup() {
    const numbers = [1, 2, 3, 4];
    const dispatch = useAppDispatch();
    const Navigate = useNavigate();
    const [message, setMessage] = useState("");
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const userToregister = useSelector((store: RootState) => store.user.user);
    const icons = [<ImFacebook2 className='w-[100%] h-[100%] text-[#0ab39c]' />, <FcGoogle  className='w-[100%] h-[100%] text-[#0ab39c]'/>,<GrLinkedin className='w-[100%] h-[100%] text-[#0ab39c]' />, <BsInstagram className='w-[100%] h-[100%] text-[#0ab39c]' />]
    const registerUser = () => {
        const inputs = [userToregister.FullName, userToregister.Email, userToregister.Country, userToregister.Password];
        for (let i = 0; i < inputs.length; i++) {
            if (userToregister.Password == "") {
                toast.error("Password is required, can not be empty");
                return;
            }
            if (inputs[i] == null || inputs[i] == "") {
                console.log(i)
                if (i === 0) {
                    toast.error(`FullName  is required, can not be empty`);
                    return;
                } else if (i === 1) {
                    toast.error("Email is required , can not be empty");
                    return;
                } else if (i === 2) {
                    toast.error("Country is required, can not be empty");
                    return;
                } else if (i + 1 === 3) {   
                    toast.error("Password is required , can not be empty");
                    return;
                } else {
                    return;
                }
            }
        }
        axios.post(baseUrl + "/signup", {
            names: userToregister.FullName,
            email: userToregister.Email,
            country: userToregister.Country,
            password: userToregister.Password
        }).then((response) => {
            console.log(response.data.message);
            localStorage.setItem("username", response.data.user.names);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("token", response.data.user.token.token)
            Navigate("/dashboards")
        }).catch((error) => {
            if (error.response.data.error.statusCode == 400) {
                toast.error(error.response.data.error.message)
            } else {
                toast.error(error.response.data.error.message)
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
                <div className='md:w-[25%]  text-black flex items-center shadow-xl border w-[95%] flex rounded    h-[68%]  mx-auto ' >
                    <div className="flex  w-[90%] mx-auto  h-[90%]  space-y-5 flex-col text-center">
                        <div className='text-black text-[0.90rem]  h-[5%]'>
                            <h1 className='text-[#405189]'>Create new account</h1>
                            <p className='text-[#878A99] font-poppins font-sans'>Get your free yocast account now.</p>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className="h-[95%]  flex flex-col space-y-3 w-[100%] ">
                            {FormInputs.map((input, index) => {
                                return (
                                    <div key={index} className='w-[95%] font-poppins font-sans  flex flex-col  mx-auto space-y-2  h-[22%]'>
                                        <label className='text-start font-poppins font-sans text-[0.90rem]  text-[#212529]' htmlFor="">{input.name} <span className='text-[#F06548]'>*</span></label>
                                        <input autoComplete='on' onChange={(e) => dispatch(initializeUser({ key: input.name, value: e.target.value }))} type={input.type} className='h-[100%] text-[black] border text-[0.80rem] pl-3 focus:outline-0  w-[100%]' placeholder={"Enter " + input.name} />
                                    </div>
                                )
                            })}
                            <div className='h-[19%] flex items-center  w-[95%] mx-auto'>
                                <button onClick={registerUser} className='bg-[#0ab39c]  h-[80%] w-[100%] rounded  text-[#fff] hover:bg-[#099885]' >Signup</button>
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
                                {icons.map((icon, index) => (
                                    <div key={index} className='w-[20%] hover:cursor-pointer h-[60%] border'>
                                        <p className='w-[100%] h-[100%]'>{icon}</p>
                                    </div>
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