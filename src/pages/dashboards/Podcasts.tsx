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
import Footer from '../../components/homeComponents/Footer'
import { dialogClasses } from '@mui/material'
import PodcastsList from '../../components/podcastsComponents/PodcastsList'
import Loading from '../../components/homeComponents/Loading'

function Podcasts() {
    const [fethed, setFetched] = useState<Boolean>(false);
    const podcastsCategories = useSelector((store: RootState) => store.podcasts.podcastsCategories);
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    setTimeout(() => {
        setFetched(true);
    }, 1000)
    // bg-[#f3f3f9]
    const dispatch = useAppDispatch();
    return <div className={  isDarkMode ? "h-screen w-[100%]  flex flex-row  overflow-y-scroll bg-[#1a1d21]" : "h-screen w-[100%]  flex flex-row  overflow-y-scroll bg-[#f3f3f9]"}>
        <div className='w-[13.6%] md:block hidden sticky top-0 relative bottom-0   h-[100%]'>
            <Sidebar/>
        </div>
        <div className='md:w-[86.4%]  h-[100%]'>
            <div className='h-[12%] nav z-100 sticky top-0 w-[100%]  right-4'>
                <Navbar  name="PODCASTS"  />
            </div>
            {fethed == false ? <Loading />: <div>
                <div className='w-[100%]   flex  items-center  h-screen'>
                    <div className='w-[96%] mt-10  mx-auto flex flex flex-col space-y-10 text-white h-[100%]'>
                        <div className='h-[95%] w-[100%] mx-auto'>
                            <PodcastsList />
                        </div>
                    </div>
                </div>
                <div className='w-[100%] h-[4%] bottom-0  '>
                    <Footer />
                </div>
            </div>}

        </div>
    </div>
}

export default Podcasts