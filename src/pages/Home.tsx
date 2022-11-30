import React from 'react'
import logoo from "../assets/images/logo.png"
import Navigation from '../components/Navigation'
import { navButtons } from '../assets/data'
import Footer from '../components/Footer'
import { useGuideLine } from '../assets/data'
import { RootState, useAppDispatch } from '../store'
import { useSelector } from 'react-redux'
import { incrementCount, decrementCount } from '../features/Counting'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import ServiceSvg from '../components/ServiceSvg'
import { Fade } from 'react-awesome-reveal'
import SmallNavigation from '../components/SmallNavigation'
import { Link } from 'react-router-dom'
function Home() {
    const dispatch = useAppDispatch();
    const getClass = (index: number) => {
        if (index == 1) {
            return "text-white bg-black hover:bg-white hover:text-black hover:border  h-[5vh] w-[35%] rounded-full";
        } else {
            return "hover:text-[grey]"
        }
    }

    const next = (length: number) => {
        dispatch(incrementCount({ length: length }))

    }

    const prev = (length: number) => {
        dispatch(decrementCount({ length: length }))
    }
    const feedbacks = useSelector((store: RootState) => store.user.feedbacks);
    const count = useSelector((store: RootState) => store.count.count)

    return (
        <div className="h-screen  space-y-10">
            <div className=' w-[100%] h-[6vh] '>
                <Navigation />
                <SmallNavigation />
            </div>
            <div className='md:w-[50%] w-[95%] mx-auto flex flex-col items-center   h-[40%]  text-center   text-black'>
                <div className='h-[90%] items-center flex  '>
                    <div className=' flex flex-col space-y-10'>
                        <div className='flex flex-col space-y-4'>
                            <h1 className='font-Anton text-6xl'>BookMarker for You</h1>
                            <div>
                                <p>bookmarker is an online tool to help you keep track of your links in your browser</p>
                                <p>It is reliable and time keeping application please give it a try</p>
                            </div>
                        </div>
                        <div className='flex  justify-center flex-row space-x-4'>
                            {navButtons.map((btn, index) => (
                                <Link to="/dashboard" className={getClass(index)}>
                                    <button key={index}  >{btn.name}</button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:h-[55vh] flex flex-col items-center  mb-[20vh] bg-black'>
                <h1 className='text-center  text-white p-4 text-3xl font-bold font-loboto'>Our services</h1>
                <div className='flex items-center  mt-5 flex-col  md:flex-row w-[60%] text-white space-x-20 mx-auto'>
                    <div className=' w-[95%] md:w-[50%]'>
                        <ServiceSvg />
                    </div>
                    <div className=' w-[95%] md:w-[50%] flex flex-col space-y-4'>
                        <p className='font-loboto '>Your search concruency is our concern</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ut nesciunt repellendus. Iusto natus sapiente magnam velit nisi magni exercitationem quidem. Consectetur, a nesciunt! Eius dicta illum nesciunt impedit labore!</p>
                    </div>
                </div>
                <div className='bg-white  flex items-center rounded space-x-3 text-black font-loboto my-4 md:my-0 md:w-[8%] p-2 md:h-[4vh] '>
                    <p>Read more</p>
                    <BsFillArrowRightCircleFill className='text-2xl' />
                </div>

            </div>
            <div className=''>
                <h1 className='font-loboto text-center'>How to use this bookmarker ? </h1>
                <div className='md:w-[60%] w-[95%] mx-auto flex flex-col space-y-[10%]'>
                    {useGuideLine.map((guide, index) => (
                        <Fade key={index}>
                            <div className='hover:shadow-xl rounded  p-3'>
                                {index % 2 == 0 ? <div className='flex flex-col md:space-y-0 space-y-10 md:flex-row space-x-9' key={index}>
                                    <div className='md:mt-0 mt-9 md:mb-0'>
                                        <h1 className='font-bold p-y-2 font-loboto text-2xl' >{guide.action}</h1>
                                        <p>{guide.text}</p>
                                    </div>
                                    <img className='md:w-[40%]' src={guide.image} />
                                </div> :
                                    <div className='flex  flex-col-reverse md:flex-row md:space-y-0 space-y-10 md:space-x-9' key={index}>

                                        <img className='md:w-[40%]' src={guide.image} />
                                        <div className='md:mt-0 mt-9 md:mb-0'>
                                            <h1 className='font-bold p-y-2 font-loboto text-2xl' >{guide.action}</h1>
                                            <p>{guide.text}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </Fade>

                    ))}

                </div>
            </div>
            <div className='md:w-[60%] w-[95%   ] h-[35vh] mx-auto'>
                <h1 className='text-center  font-bold'>Our Reviews</h1>
                <div className='flex md:w-[50%] space-x-4 items-center  h-[100%]  mx-auto'>
                    <div className='w-[10%]'>
                        <BsFillArrowRightCircleFill onClick={() => next(feedbacks.length)} className='text-4xl' />
                    </div>
                    <div className=' w-[90%] hover:shadow-xl  p-2 flex flex-row border mx-auto h-[100%]'>
                        {feedbacks.map((feedback, index) => (
                            <Fade key={index}>
                                <div className=' flex flex-col justify-between h-[100%]'>
                                    {index == count && <div>
                                        <div className=' mx-auto flex items-center '>
                                            <img className="w-[35%] h-[15vh] rounded-full mx-auto " src={feedback.image} />
                                        </div>
                                        <div className='flex flex-col space-y-3'>
                                            <p className='text-black font-loboto font-bold'>{feedback.name}</p>
                                            <p className='text-[grey]'>{feedback.bio}</p>
                                            <p>{feedback.message}</p>
                                        </div>
                                    </div>}
                                </div>

                            </Fade>
                        ))}
                    </div>
                    <div className='w-[10%]'>
                        <BsFillArrowLeftCircleFill onClick={() => prev(feedbacks.length)} className='text-4xl' />
                    </div>
                </div>
            </div>
            <div className=''>
                <Footer />
                <div className='w-[100%] bg-[#171717] p-3 text-white text-center mx-auto'>
                    <p>&copy; . Allrights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Home