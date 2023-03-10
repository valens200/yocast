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
import Footer from '../../components/homeComponents/Footer'
import ClientsTable from '../../components/clientsComponents/ClientsTable'
import PodcastsList from '../../components/podcastsComponents/PodcastsList'
import { setIsDarkMode } from '../../features/pageSlice'
import Loading from '../../components/homeComponents/Loading'
import { initializeLoggedInUser } from '../../features/userSlice'
function Subscriptions() {
    const [fethed, setFetched] = useState<Boolean>(false);


    const user = JSON.parse(localStorage.getItem("user")!);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(initializeLoggedInUser(user))
        if (!user || user == "" || user == null) {
            navigate("/")
        }
    }, [user])
    const podcastsCategories = useSelector((store: RootState) => store.podcasts.podcastsCategories);
    const showSidebar = useSelector((store: RootState) => store.page.showSidebar);
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);

    const getSidebarClass = (): String => {
        if (showSidebar) {
            return "w-[13.6%]   sticky top-0 relative bottom-0   h-[100%]"
        }
        return "w-[13.6%]  sticky top-0 relative bottom-0   h-[100%]"
    }
    const dispatch = useAppDispatch();
    return <div className="h-screen w-[100%]  flex flex-row  overflow-y-scroll bg-[#1a1d21]">
        <div className='w-[18.6%] xl:w-[13.6%]  md:block hidden sticky top-0 relative bottom-0   h-[100%]'>
            <Sidebar />
        </div>
             {/* sm:bg-black md:bg-white lg:bg-[green] xl:bg-[blue] text-white font-sans  */}
        <div className='md:w-[81.4%]   xl:w-[86.4%]  w-[100%] h-[100%]'>
            <div className='h-[12%] nav z-100 sticky top-0 w-[100%]  right-4'>
                <Navbar name="Subscriptions" />
            </div>
            {/* bg-[#f3f3f9] */}
            {   <div>
                <div className={isDarkMode ? 'w-[100%]    flex  items-center  h-screen' : 'w-[100%] bg-[#f3f3f9]    flex  items-center  h-screen'}>
                    <div className='w-[96%] mt-10  mx-auto flex flex flex-col space-y-10 text-white h-[100%]'>
                        <div className='h-[95%] w-[100%] mx-auto'>
                            <ClientsTable />
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

export default Subscriptions