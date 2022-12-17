import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Project() {
    return (
        <div className='w-[100%] h-screen'>
            <div className="md:h-[50%] home w-[100%] flex-col flex items-center">
                <div className="w-[100%] h-[70%] flex-col space-y-4 mx-auto flex items-center">
                    <h1 className="text-center my-4 p-4 font-loboto text-white ont-Anton text-6xl text-4xl">Hello wellcome to Vany's weather station</h1>
                    <div className="w-[100%] h-[100%] ">
                        <form method="POST" action="server.php" className="bg-white flex flex-col space-y-6 shadow-xl w-[90%] md:w-[33%] md:h-[50vh]  rounded p-4 mx-auto rounded px-8 pt-6 pb-8 mb-4">
                            <div>
                                <h1 className='font-bold text-center '>Enter Data</h1>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Your name
                                </label>
                                <input placeholder="Your name" name="name" className="shadow h-[6vh] hover:border-blue-70 w-[100%]  appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Date
                                </label>
                                <input placeholder="Your name" name="name" className="shadow h-[6vh] hover:border-blue-700 w-[100%]  appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="date" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Temperature
                                </label>
                                <input type="number" name="temperature" className="shadow h-[6vh] w-[100%] appearance-none border hover:border-blue-700 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="temperature ex:27" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    save
                                </button>
                                <a className="inline-block invisible align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
            <div className='w-[100%] flex md:flex-row md:h-[20vh] flex-col-reverse items-center bottom-0 md:fixed  relative   bg-white border z-4xl text-black'>
                <div className=''>xx``
                    <img className='w-[60%]' src="data:image/png;base64,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" alt="" />
                </div>
                <div className='w-[80%]'>
                    <div className='flex p-5 items-center justify-between  flex-row  justify-between w-[100%] mx-auto items-center p-4'>
                        <div className='w-[80%]  mx-auto text-white md:justify-between md:space-y-0 space-y-9  md:items-center  flex flex-col md:flex-row '>
                            <div>
                                <h1>Contact us</h1>
                                <ul className='text-black'>
                                    <li className='hover:underline hover:text-[grey] hover:cursor-pointer'>valensniyonsenga2003@gmail.com</li>
                                    <li className='hover:underline hover:text-[grey] hover:cursor-pointer'>Slack</li>
                                    <li className='hover:underline hover:text-[grey] hover:cursor-pointer '>Instagram</li>
                                </ul>
                            </div>
                            <div className='text-black'>
                                <h1>Foundator</h1>
                                <p className='hover:underline hover:text-[grey] hover:cursor-pointer'>gabazimwabo@gmail.com</p>
                            </div>
                            <div className='h-[100%] hidden className="text-black'>
                                <h1 className='text-black font-bold font-loboto'>Send us a message</h1>
                                <form className='flex h-[90%] flex-col space-y-4'>
                                    <div className='h-[80%] '>
                                        <input className='h-[5vh] p-2 border focus:outline-0 text-black' type="email" placeholder='Email' />
                                    </div>
                                    <div>
                                        <textarea name="" id="" className='border p-2 ocus:outline-0 text-black' placeholder='Message....' ></textarea>
                                    </div>
                                    <div>
                                        <input type="submit" />
                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 valens_foreach. Allrights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project