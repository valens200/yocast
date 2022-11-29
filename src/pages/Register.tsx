import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
function Register() {
    return (
        <div className='h-screen'>
            <div className='h-[6vh]'>
                <Navigation />
            </div>
            <div className='h-[78vh] flex items-center'>
                <div className='w-[40%] mx-auto h-[40%] border p-2  shadow-2xl'>
                    <h1 className='text-center font-loboto'>let us build your profile</h1>

                </div>

            </div>
            <div className='h-[10vh]'>
                <Footer />
            </div>
        </div>
    )
}

export default Register