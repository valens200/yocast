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
import { useState , useEffect} from 'react'
import { set } from 'immer/dist/internal'
function Home() {
    const [fethed, setFetched] = useState<Boolean>(false);
    setTimeout(() => {
        setFetched(true);
    }, 1000)
    const dispatch = useAppDispatch();
    const getClass = (index: number) => {
        if (index == 1) {
            return "text-white bg-black hover:bg-white hover:text-black hover:border  h-[5vh] w-[33%] rounded-full";
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

    return fethed == false ? (
        <div className='h-screen flex items-center'>
            <div className='w-[50%] flex-col flex items-center justify-center mx-auto h-[20%]' role="status">
                <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className=" font-loboto ">Bookmarker...</span>
            </div>
        </div>
    ) : (
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
                                <div className={getClass(index)}>
                                    <Link to="/dashboard" >
                                        <button key={index} className="w-[100%] h-[100%]" >{btn.name}</button>
                                    </Link>
                                </div>
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