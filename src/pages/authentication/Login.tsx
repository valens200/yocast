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
import Loading from '../../components/homeComponents/Loading'
import { setLoading } from '../../features/pageSlice'
function Login() {
    const numbers = [1, 2, 3, 4];
    const icons = [<ImFacebook2 className='w-[80%] h-[80%] text-[#0ab39c]' />, <FcGoogle className='w-[80%] h-[80%]  text-[#0ab39c]' />, <GrLinkedin className=' w-[80%] h-[80%] text-[#0ab39c]' />, <BsInstagram className='w-[80%] h-[80%] text-[#0ab39c]' />]
    const dispatch = useAppDispatch();
    const [loggedin, setLoggedIn] = useState<boolean>(false);
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const userToLogin = useSelector((store: RootState) => store.user.user);
    const isLoading = useSelector((store: RootState) => store.page.isLoading);
    const navigate = useNavigate();
    const login = () => {
        dispatch(setLoading(true))
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
            localStorage.setItem("user", JSON.stringify(response.data.user))
            toast.success("You loggedin successfully")
            if (response.data.statusCode === 200) {
                navigate("/dashboard")
            }
            dispatch(setLoading(false))
        }).catch((error) => {
            if (error.response.data.error.statusCode == 400) {
                toast.error("invalid email or password")
            } else {
                toast.info("Internal server error")
            }
            dispatch(setLoading(false))
        })
    }



    //proscottMiller

    return (
        <div className='h-screen font-poppins font-sans  flex-col  flex items-center'>
            <ToastContainer />
            <div className='h-[98%] flex flex-col space-y-9 items-center justify-center w-[100%]'>
                <div className='flex flex-col'>
                    <img className='w-[20%]  flex mx-auto' src={logo} alt="" />
                    <div className='flex flex-col space-y-3'>
                        <Header />
                        <div className='text-[0.80rem] text-center font-poppins font-sans' >
                            <p className='sm:text-[red] lg:text-[green] xl:text-[blue]'>Sign in with your  <span className='text-[#0ab39c] font-sans mx-2 underline'>Yocast</span> account </p>
                            <p> to start listening</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-[25%]  min-[768px]:w-[95%] min-[800px]:w-[70%] xl:w-[35%] min-[1438px]:w-[25%] min-[988px]:w-[50%] text-black flex items-center shadow-xl border w-[95%] flex rounded    h-[58%]  mx-auto ' >
                    <div className="flex  w-[90%] mx-auto  h-[90%]  space-y-5 flex-col text-center">
                        <div className='text-black  h-[10%]'>
                            <h1 className='text-[#405189]'>Welcome Back !</h1>
                            <p className='text-[#878A99] font-poppins font-sans' >Sign in to continue to Yocast.</p>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className="h-[90%]  flex flex-col space-y-3 w-[100%] ">
                            {FormInputs.slice(1, 4).map((input, index) => {
                                if (input.name == 'Password') {
                                    return (
                                        <div key={index} className='h-[18%]  w-[95%] mx-auto '>
                                            <div className='h-[10%] max-[232px]:flex-col  flex justify-between'>
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
                                <button onClick={login} className='bg-[#0ab39c] text-center items-center font-bold  h-[80%] w-[100%] rounded  text-[#fff] hover:bg-[#099885]'>{isLoading ? <span className='w-[50%] mx-auto flex justify-between items-center'>
                                    <svg aria-hidden="true" className="mr-2 w-[90%]  text-[0.70rem] h-8  mx-auto ext-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </span> : <span>Signin</span>}</button>
                            </div>
                            <div className=' flex  max-[352px]:space-x-3 w-[95%] mx-auto'>
                                <div className='border-[0.01rem] max-[352px]:hidden  h-[20%] border-t-0 border-x-0  border-dashed  w-[35%]'>
                                </div>
                                <div className='w-[30%]   max-[352px]:-translate-y-2  max-[352px]:w-[80%]'>
                                    <p>Sign in with</p>
                                </div>
                                <div className='w-[35%] h-[20%] max-[352px]:hidden max-[352px]:w-[20%] border-t-0 border-x-0 border-[0.01rem] border-dashed'>
                                </div>
                            </div>
                            <div className='h-[19%] flex  justify-center   w-[50%] mx-auto'>
                                {icons.map((icon, index) => (
                                    <div key={index} className='w-[20%]  hover:cursor-pointer h-[60%] '>
                                        <p className='w-[100%] h-[100%]  text-[0.80rem]'>{icon}</p>
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