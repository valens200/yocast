import React from 'react'
import { sidebarLinks, bottomSidebarLinks } from '../../assets/staticAssets/data'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Slide } from 'react-awesome-reveal'
import { Fade } from 'react-awesome-reveal'
import { setShowSidebar } from '../../features/pageSlice'
import logo from "../../assets/images/logo.png"
function Sidebar() {
    const showSidebar = useSelector((store: RootState) => store.page.showSidebar);
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const getSidebarClass = (): String => {
        if (showSidebar) {
            return isDarkMode ? "md:w-[13.6%]  w-[50%] flex sidebar  flex-col space-y-10 text-white  font-sans fixed top-0     bottom-0 bg-[#212529]   h-[100%]" : "w-[50%] md:w-[13.6%]   flex sidebar  flex-col space-y-10 text-white   font-sans fixed top-0    bottom-0  bg-[#405189]  h-[100%]"
        }
        return isDarkMode ? "w-[13.6%] md:block sidebar hidden  flex  flex-col space-y-10 text-white  font-sans  fixed top-0   bottom-0  bg-[#212529]  h-[100%]" : "w-[13.6%] md:block sidebar hidden  flex text-[#838fb9] flex-col space-y-10  font-sans  fixed top-0   bottom-0  bg-[#405189]  h-[100%]"
    }

    const dispatch = useDispatch();
    return ReactDOM.createPortal(
        <div onClick={() => dispatch(setShowSidebar("hide"))} className={getSidebarClass().toString()}>
            <div className='h-[10%] w-[100%] flex  flex-col items-center mt-4  '>
                <img className='w-[30%]  flex mx-auto' src={logo} alt="yocast logo" />
                <Link className={isDarkMode ? 'text-center  font-poppins font-sans font-bold   text-3xl' : 'text-center text-white  font-poppins font-sans font-bold   text-3xl'} to="/"><h1 >YOCAST</h1></Link>
            </div>
            <div className={isDarkMode ? 'w-[60%] flex items-center h-[70%] mx-auto text-[#7c7f90]':'w-[60%] flex items-center h-[70%] hover:text-white mx-auto text-[#ABB9E8]'}>
                <Slide>
                    <ul className='flex  h-[90%] flex-col space-y-5'>
                        {sidebarLinks.map((link, index) => (
                            <Link key={index} to={link.link.toString()}> <li className={isDarkMode ? 'hover:text-white  text-[0.80rem] hover:cursor-pointer' : 'hover:text-white  text-[0.80rem] text-[#838fb9] hover:cursor-pointer'} key={index}>{link.title}</li></Link>
                        ))}
                    </ul>

                </Slide>
            </div>
            <div className='h-[10%] w-[60%] mx-auto'>
                <ul className='flex  h-[90%] flex-col space-y-7'>
                    {bottomSidebarLinks.map((link, index) => (
                        <Link key={index} to="/main"><li className='hover:text-white hover:cursor-pointer' key={index}>{link.title}</li></Link>
                    ))}
                </ul>
            </div>
        </div>, document.getElementById("sidebar")!
    )
}

export default Sidebar