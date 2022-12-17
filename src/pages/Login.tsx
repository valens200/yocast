import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { TextField } from '@material-ui/core'
import { formInputs } from '../assets/data'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className='h-screen'>
            <div className='h-[6vh]'>
                <Navigation />
            </div>
            <div className='h-[78vh] flex items-center'>
                <div className='w-[36%] rounded  flex pt-5 flex-col space-y-3 mx-auto h-[50%]    shadow-2xl'>
                    <h1 className='text-center font-loboto'>Login to your profile</h1>
                    <div className='flex h-[60%] flex-col space-y-4'>
                        {formInputs.slice(1).map((form, index) => (
                            <div key={index} className='w-[80%] mx-auto'>
                                <TextField type={form.type} className='w-[100%] mx-auto' label={form.name} variant="outlined" />
                            </div>
                        ))}
                        <div className='flex justify-end w-[89%]'>
                            <button className=' float-right bg-black w-[18%] text-white p-3 rounded font-bold hover:bg-black-100'>Login</button>
                        </div>
                        <div className='text-end w-[80%] mx-auto'>
                            <p>Don't have you have an account ? <Link to="/register"><span className='hover:cursor-pointer hover:font-bold'>Register</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[10vh]'>
                <Footer />
            </div>
        </div>
    )
}

export default Login