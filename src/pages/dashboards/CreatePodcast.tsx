import React from 'react'
import logoo from "../assets/images/logo.png"
import { RootState, useAppDispatch } from '../../store'
import { useSelector } from 'react-redux'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Sidebar from '../../components/homeComponents/Sidebar'
import { set } from 'immer/dist/internal'
import Navbar from '../../components/homeComponents/Navbar'
import { activityType } from '../../types/appTypes'
import Form from '../../components/createPodcastComponents/Form'

import Footer from '../../components/homeComponents/Footer'
import Loading from '../../components/homeComponents/Loading'
function CreateProduct() {
    const [fethed, setFetched] = useState<Boolean>(false);
    const recentActivities = useSelector((store: RootState) => store.recentActivities.activities);
    const podcasts = useSelector((store: RootState) => store.podcasts.podcasts);
    const clientsReviews = useSelector((store: RootState) => store.podcasts.reviews)
    const lengthSample: number = "WARUZIKO KURI RADIO RWANDA TARIKI YA 5".length;
    setTimeout(() => {
        setFetched(true);
    }, 1000)
    const dispatch = useAppDispatch();
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const getClass = (index: number) => {
        if (index == 1) {
            return "text-white bg-black hover:bg-white hover:text-black hover:border  h-[5vh] w-[33%] rounded-full";
        } else {
            return "hover:text-[grey]"
        }
    }
    return <div className={ isDarkMode  === true ? "h-screen w-[100%]  flex flex-row  overflow-y-scroll bg-[#1a1d21]" : "h-screen w-[100%]  flex flex-row  overflow-y-scroll  bg-[#f3f3f9] "}>
            <div className='w-[13.6%] md:block hidden  sticky top-0 relative bottom-0   h-[100%]'>
                <Sidebar />
            </div>
            <div className='md:w-[86.4%]  w-[100%] h-[100%]'>
                <div className='h-[12%] nav z-100 sticky top-0 w-[100%]  right-4'>
                    <Navbar />
                </div>
                {fethed == false ? <Loading />: <div className='w-[100%]   flex flex-col  justify-between h-[100%]'>
                    <div className='w-[100%]  flex items-center  text-white h-[190vh]'>
                        <div className='h-[95%] w-[100%] '>
                            <div className='h-[100%] w-[95%] mx-auto'>
                                <Form />
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%]  bottom-0  '>
                        <Footer />
                    </div>
                </div>}

            </div>
        </div>
}

export default CreateProduct