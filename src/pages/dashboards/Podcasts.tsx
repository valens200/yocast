import React from 'react'
import logoo from "../assets/images/logo.png"
import { RootState, useAppDispatch } from '../../store'
import { useSelector } from 'react-redux'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import { Fade } from 'react-awesome-reveal'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Sidebar from '../../components/homeComponents/Sidebar'
import { set } from 'immer/dist/internal'
import Navbar from '../../components/homeComponents/Navbar'
import { activityType } from '../../types/appTypes'
import Footer from '../../components/homeComponents/Footer'
import { dialogClasses } from '@mui/material'
import PodcastsList from '../../components/podcastsComponents/PodcastsList'
import Loading from '../../components/homeComponents/Loading'
import { initializeLoggedInUser } from '../../features/userSlice'
import axios from 'axios'
import { intilializePodcasts } from '../../features/podCastSlice';
import { baseUrl } from '../../assets/staticAssets/data'
import PodcastDetails from '../../components/podcastsComponents/PodcastDetails'
import { setLoading } from '../../features/pageSlice'

function Podcasts() {
    const [fethed, setFetched] = useState<Boolean>(false);
    const isLoading = useSelector((store: RootState) => store.page.isLoading);
    const user = JSON.parse(localStorage.getItem("user")!);
    const navigate = useNavigate();

    //initializing loggedIn user and getting all the podcasts from database using useEffect Hook
    useEffect(() => {
        dispatch(initializeLoggedInUser(user))
        if (!user || user == "" || user == null) {
            navigate("/");
            return;
        }
        axios({
            method: "GET",
            url: baseUrl + "/podcasts",
            headers: {
                Authorization: `Bearer ${user.token.token}`,
                'Content-Type': "application/json"
            }
        }).then((response) => {
            dispatch(intilializePodcasts(response.data.podcast))
            setFetched(true)
        }).catch((error) => {
            console.log(error)
            setFetched(true)
        })

    }, [user])
    const podcastsCategories = useSelector((store: RootState) => store.podcasts.podcastsCategories);
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const dispatch = useAppDispatch();
    return <div className={isDarkMode ? " flex flex-row h-[100%]  overflow-y-scroll bg-[#1a1d21]" : "h-screen w-[100%]  flex flex-row  overflow-y-scroll bg-[#f3f3f9]"}>
        <div className='w-[13.6%] md:block hidden sticky top-0 relative bottom-0   h-[100%]'>
            {/* app left sidebar */}
            <Sidebar />
        </div>
        <div className='md:w-[86.4%] w-[100%]  h-[100%]'>
            {/* app navbar component */}
            <div className='h-[12%] nav z-100 sticky top-0 w-[100%]  right-4'>
                <Navbar name="PODCASTS" />
            </div>
            {fethed == false ? <Loading name="Podcasts..." /> : <div className='h-[78%] w-[100%]   '>
                <div className='w-[95%]  mx-auto  flex  items-center  h-screen'>
                    <div className='w-[100%] mt-10  mx-auto flex flex flex-col space-y-10 text-white h-[100%]'>
                        <div className='h-[100%] w-[100%] mx-auto'>
                            <PodcastsList />
                        </div>
                    </div>
                </div>
                {/* <div className='w-[100%] h-[5%] bottom-0  '>
                    <Footer />
                </div> */}
            </div>}

        </div>
    </div>
}

export default Podcasts