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
import { dialogClasses } from '@mui/material'
import customerProgress from '../../components/homeComponents/CustomerProgress'
import CustomerProgress from '../../components/homeComponents/CustomerProgress'
import AnalyticsCards from '../../components/homeComponents/AnalyticsCards'
import Charts from '../../components/homeComponents/Charts'
import SellingProducts from '../../components/homeComponents/SellingProducts'
import Orders from '../../components/homeComponents/Orders'
import Footer from '../../components/homeComponents/Footer'
import Loading from '../../components/homeComponents/Loading'
function Home() {
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
    return fethed == false ? (
      <Loading />
    ) : (
        <div className={ isDarkMode ?  "h-screen w-[100%]  flex flex-row  overflow-y-scroll bg-[#1a1d21]" : "h-screen w-[100%]  flex flex-row  overflow-y-scroll bg-[#f3f3f9]"}>
            <div className='w-[13.6%] md:block hidden sticky top-0 relative bottom-0   h-[100%]'>
                <Sidebar />
            </div>
            <div className='w-[86.4%]  h-[100%]'>
                <div className='h-[12%] nav z-100 sticky top-0 w-[100%]  right-4'>
                    <Navbar />
                </div>
                <div className='w-[100%]   flex flex-row  justify-between h-[100%]'>
                    <div className='w-[85%]   flex flex flex-col space-y-1 text-white h-screen md:h-[190vh]'>
                        <div className='h-[7%]'>
                            <div className='h-[100%] w-[95%]'>

                            </div>
                        </div>
                        <AnalyticsCards />
                        <div className='h-[20%] w-[95%] mx-auto'>
                            <Charts />
                        </div>
                        <div className='h-[25%] w-[95%] mx-auto'>
                            <SellingProducts />
                        </div>
                        <div className='h-[30%] w-[95%] mx-auto'>
                            <Orders />
                        </div>
                        <div className='w-[100%] h-[3%] bottom-0  '>
                            <Footer />
                        </div>
                    </div>
                    <div className={ isDarkMode ? 'w-[15%] md:block hidden  sticky right-sidebar bg-[#212529]  text-white   z-20 ' : 'w-[15%] md:block hidden  sticky right-sidebar bg-white  text-white   z-20 '}>
                        <div className='w-[95%] flex flex-col space-y-5  mx-auto p-2 mt-4 overflow-y-scroll h-[34%]'>
                            <h1 className='text-[grey] font-poppins font-sans font-bold  text-[0.90rem]'>RECENT ACTIVITIES</h1>
                            <div className=' flex w-[100%] flex-col space-y-9'>
                                {recentActivities.map((activity, index) => (
                                    <div className='w-[100%]' key={index}>
                                        <div className='flex space-x-2 w-[100%]'>
                                            <div className='w-[24%] h-[4vh]'>
                                                {activity.titleImage == "" ? <div className='bg-[#f7b84b]  w-[80%] rounded-full h-[100%]'></div> : <div className='h-[100%] w-[80%] rounded-full'>
                                                    <img src={activity.titleImage.toString()} className="w-[100%] h-[100%] rounded-full" alt="activity  title image" />
                                                </div>}
                                            </div>
                                            <h1 className='text-[0.80rem] font-loboto font-sans'>{activity.title.length > lengthSample ? activity.title.substring(lengthSample) + "...." : activity.title}</h1>
                                        </div>
                                        <div className='flex  space-x-6 h-[100%] w-[80%] mx-auto   border-y-0 border-r-0'>
                                            <div className='border border-[0.01rem] border-[grey] h-[100%]  border-dashed border-y-0 border-r-0'></div>
                                            <div className='text-[grey] text-[0.90rem]'>

                                                <p>{activity.description}</p>
                                                {
                                                    activity.descriptionImage[0] == "" ? null :
                                                        getImages(activity)
                                                }
                                                <p>{activity.time}</p>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-[100%]  mx-auto'>
                            <div className={ isDarkMode ? 'w-[95%]  bg-[#212529] mx-auto p-4 font-sans font-poppins flex flex-col space-y-8' : 'w-[95%] text-[#212529] fontpoppins font-sans  bg-white  mx-auto p-4 flex flex-col space-y-8'}>
                                <h1 className="font-poppins font-sans text-[0.80rem] font-bold text-[grey]">TOP 10 PODCASTS</h1>
                                <div>

                                    {podcasts.map((activity, index) => (
                                        <div className='w-[100%] h-[10vh]' key={index}>
                                            <div className='flex space-x-2 w-[100%]'>
                                                <div className='w-[24%] h-[4vh]'>
                                                    {activity.screenShoot == "" ? <div className='bg-[#f7b84b]  w-[80%] rounded-full h-[100%]'></div> : <div className='h-[100%] w-[80%] rounded-full'>
                                                        <img src={activity.screenShoot} className="w-[100%] h-[100%]  rounded " alt="activity  title image" />
                                                    </div>}
                                                </div>
                                                <h1 className='text-[0.80rem] font-poppins font-sans'>{activity.title.length > lengthSample ? activity.title.substring(0, lengthSample) + "...." : activity.title}</h1>
                                            </div>
                                            <div className='flex  space-x-6 h-[100%] w-[80%] mx-auto   border-y-0 border-r-0'>
                                                <div className='border border-[0.01rem] border-[grey] hidden h-[100%]  border-dashed border-y-0 border-r-0'></div>
                                                <div className='text-[grey] text-[0.90rem]'>
                                                    <p>{activity.length}</p>
                                                    <p>{activity.time}</p>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h1 className='text-center text-[grey] underline hover:text-white hover:cursor-pointer '>Vew all podcasts</h1>
                                <p className="font-poppins text-[0.80rem] font-bold text-[grey]">PODCASTS REVIEWS</p>
                                <div className='h-[23vh] hover:cursor-pointer overflow-y-scroll'>
                                    {clientsReviews.map((activity, index) => (
                                        <div className='w-[100%] border border-dashed border-[grey] p-2 h-[10vh]' key={index}>
                                            <div className='flex space-x-2 w-[100%]'>
                                                <div className='w-[48%] h-[4vh]'>
                                                    {activity.profileImage == "" ? <div className='bg-[#f7b84b]  w-[80%] rounded-full h-[100%]'></div> : <div className='h-[100%] w-[90%] rounded-full'>
                                                        <img src={activity.profileImage} className="w-[100%] h-[100%]  rounded-full " alt="activity  title image" />
                                                    </div>}
                                                </div>
                                                <h1 className='text-[0.80rem] font-loboto font-sans'>{activity.message.length > lengthSample ? activity.message.substring(0, lengthSample) + "...." : activity.message.toString()}</h1>
                                            </div>
                                            <div className='flex  space-x-6 h-[100%] w-[80%] mx-auto   border-y-0 border-r-0'>
                                                <div className='border border-[0.01rem] border-[grey] h-[100%]  hidden border-dashed border-y-0 border-r-0'></div>
                                                <div className='text-[grey] text-[0.90rem]'>
                                                    <p className='font-dancing font-sans'>{"by " + activity.reviewer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-col space-y-4'>
                                    <p className="font-poppins text-[0.80rem] font-bold text-[grey]">CUSTOMER REVIEWS</p>
                                    <p className={ isDarkMode ? ' text-end text-white  bg-[#2a2f34] p-2 rounded font-sans font-poppins text-[0.80rem]' : 'text-end text-white  bg-[#f3f3f9] text-[#212529] font-sans font-poppins p-2 rounded font-poppins text-[0.80rem]'}>4.5 out of 5</p>
                                    <p className="font-poppins text-[0.80rem] font-bold text-[grey]">Tatal 4.4k reviews</p>
                                    <CustomerProgress />
                                </div>
                                <div className={ isDarkMode ? ' p-4 flex flex-col space-y-5 w-[100%] mx-auto bg-[#2a2f34]' : ' p-4 flex  text-[#212529] flex-col bg-[#f3f3f9]  space-y-5 w-[100%] mx-auto '}>
                                    <div className='flex items-center  justify-center w-[80%] mx-auto'>
                                        <img className='' src='http://127.0.0.1:5501/assets/images/giftbox.png' />
                                    </div>
                                    <h1 className='text-center'>Invite New Customer</h1>
                                    <p className='text-[0.80rem] font-poppins text-[grey] text-center '>Refer a new seller to us and earn $100 per refer</p>
                                    <button className={ isDarkMode ? 'bg-[#405189] rounded-full w-[80%] mx-auto font-poppins font-sans h-[4vh]' : 'bg-[#405189] text-white font-sans rounded-full w-[80%] mx-auto font-poppins h-[4vh]'}><span className='w-[40%] bg-[blue] text-[blue] mr-1 rounded-full h-[100%]'>iks</span><span>Invite Now</span></button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home