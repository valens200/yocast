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
import { dialogClasses } from '@mui/material'
import customerProgress from '../../components/homeComponents/CustomerProgress'
import CustomerProgress from '../../components/homeComponents/CustomerProgress'
import AnalyticsCards from '../../components/homeComponents/AnalyticsCards'
import Charts from '../../components/homeComponents/Charts'
import SellingProducts from '../../components/homeComponents/SellingProducts'
import Orders from '../../components/homeComponents/Orders'
import Footer from '../../components/homeComponents/Footer'
import Loading from '../../components/homeComponents/Loading'
import { initializeLoggedInUser } from '../../features/userSlice'
function For04() {
    const user = JSON.parse(localStorage.getItem("user")!);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(initializeLoggedInUser(user))
        if(!user || user == "" || user == null){
            navigate("/")
        }
    }, [user])
    const [fethed, setFetched] = useState<Boolean>(false);
    const recentActivities = useSelector((store: RootState) => store.recentActivities.activities);
    const podcasts = useSelector((store: RootState) => store.podcasts.podcasts);
    const clientsReviews = useSelector((store: RootState) => store.podcasts.reviews)
    const lengthSample: number = "WARUZIKO KURI RADIO RWANDA TARIKI YA 5".length;
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
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

    const getImages = (activity: activityType) => {
        let div;
        div = <div className='flex border border-dashed border-[grey] p-2 flex-row'>
            {
                activity.descriptionImage.map((activity, index) => (
                    <div className='' key={index}>
                        <img className='w-[80%]' src={activity.toString()} alt="" />
                    </div>
                ))
            }
        </div>
        return div;
    }
    return <div className={isDarkMode ? "h-screen font-sans w-[100%]  flex flex-row  overflow-y-scroll bg-[#1a1d21]" : "h-screen font-sans w-[100%]  flex flex-row  overflow-y-scroll bg-[#f3f3f9] "}>
            <div className='w-[13.6%] md:block hidden sticky top-0 relative bottom-0   h-[100%]'>
                <Sidebar />
            </div>
            <div className='md:w-[86.4%] w-[100%]  h-[100%]'>
                <div className='h-[12%] nav z-100 sticky top-0 w-[100%]  right-4'>
                    <Navbar  name="under development"  />
                </div>
                {fethed === false ? <Loading /> : <div className='w-[100%]   flex flex-row  justify-between h-[100%]'>
                    <div className='w-[100%]   flex flex flex-col space-y-1 text-white h-screen h-screen'>
                        <div className=' h-[100%] md:h-[90%] w-[95%] mx-auto'>
                            <Orders />
                        </div>
                        <div className='w-[100%] h-[3%] bottom-0  '>
                            <Footer />
                        </div>
                    </div>
                </div>}

            </div>
        </div>
}

export default For04