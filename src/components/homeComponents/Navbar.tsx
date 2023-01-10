import React from 'react'
import { HiMenuAlt1 } from "react-icons/hi"
import { GrHomeRounded } from "react-icons/gr"
import { BsBag, BsMoon } from 'react-icons/bs'
import { HiOutlineSquares2X2 } from "react-icons/hi2"
import { GiSquare } from "react-icons/gi"
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5"
import { IoMdNotificationsOutline } from 'react-icons/io'
import { TbFocusCentered } from "react-icons/tb"
import { setShowSidebar } from '../../features/pageSlice'
import { setIsDarkMode } from '../../features/pageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useSelect } from '@mui/base'
import { RootState, store } from '../../store'
import postcss from 'postcss'
function Navbar(props: { name: string }) {
    const loggedInUser = useSelector((store: RootState) => store.user.loggedInUser);
    const icons = [<HiOutlineSquares2X2 />,
    <BsBag />,
    <TbFocusCentered />,
    <IoSunnyOutline />,
    <IoMdNotificationsOutline />];
    const dispatch = useDispatch();
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const getClass = (index: number) => {
        if (index == 2) {
            return "absolute text-[white] bg-[#405189]  h-[20%] font-bold w-[5%]  md:w-[1.3vw] -translate-y-9 translate-x-[40%] text-center rounded-full text-[0.70rem]"
        } else if (index == 4) {
            return "absolute text-[white] bg-[red] h-[20%] font-bold w-[5%]  md:w-[1.3vw]    -translate-y-9 translate-x-[40%] text-center rounded-full text-[0.70rem]"
        } else {
            return "absolute  hidden -translate-y-10 translate-x-[100%]  text-[0.70rem]"
        }
    }
    return (
        <div className={isDarkMode === true ? 'w-[100%] text-white font-sans   bg-[#2a2f34] h-[100%]' : 'w-[100%] text-black font-sans   bg-white h-[100%]'}>
            <div className='h-[60%]    w-[100%]'>
                <div className='flex flex-row h-[100%] items-center  justify-between w-[98%] mx-auto' >
                    <div className='  w-[30%] md:w-[70%] flex h-[100%] space-x-4 items-center flex-row '>
                        <div className='flex text-[grey]     flex-row space-x-8'>
                            <HiMenuAlt1 onClick={() => dispatch(setShowSidebar("show"))} className='text-3xl md:hidden' />
                            <HiMenuAlt1 className='text-3xl md:block hidden' />
                        </div>
                        <div className='md:w-[30%] md:block hidden h-[55%]'>
                            <input type="text" className={isDarkMode ? 'bg-[#1a1d21] focus:outline-0 text-[0.80rem] rounded pl-3 h-[100%] w-[100%]' : 'bg-[#f3f3f9] focus:outline-0 text-[0.80rem] rounded pl-3 h-[100%] w-[100%]'} placeholder='search....' />
                        </div>
                    </div>
                    <div className='md:w-[30%] w-[70%] justify-between items-center flex-row flex'>
                        <div className='w-[48%]'>
                            <ul className='flex flex-row space-x-3'>
                                {icons.map((icon, index) => {
                                    if (index == 3) {
                                        if (isDarkMode) {
                                            return (
                                                <li onClick={() => dispatch(setIsDarkMode("white"))} className='text-2xl hover:bg-[#405189] p-2 rounded-full hover:cursor-pointer' key={index}>{icon} <p className={getClass(index)}>23</p></li>
                                            )
                                        }
                                        return (
                                            <li onClick={() => dispatch(setIsDarkMode("dark"))} className='text-2xl hover:bg-[#405189] p-2 rounded-full hover:cursor-pointer' key={index}><BsMoon /><p className={getClass(index)}>23</p></li>
                                        )
                                    }
                                    return (
                                        <li onClick={() => dispatch(setIsDarkMode("main"))} className='text-2xl hover:bg-[#405189] p-2 rounded-full hover:cursor-pointer' key={index}>{icon} <p className={getClass(index)}>23</p></li>

                                    )

                                })}
                            </ul>
                        </div>
                        <div className='flex bg-[#B3B6B7 ] h-[100%]  w-[40%] justify-end space-x-3  font-poppins  flex-row'>
                            <div className='h-[100%] w-[30%] md:w-[20%]'>
                                <img className='h-[100%] w-[100%] rounded-full ' src='data:image/jpeg;base64,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' />
                            </div>
                            <div className='h-[100%] font-poppins font-sans md:block hidden w-[50%]'>
                                <h1 className='text-[0.90rem]'>{loggedInUser.names.split(" ")[0]}</h1>
                                <p className='text-[grey] text-[0.80rem]'>{loggedInUser.type}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={isDarkMode ? 'bg-[#212529] sticky  top-0 w-[100%] h-[40%]' : 'bg-white border border-x-0 border-b-0 sticky  top-0 w-[100%] h-[40%]'}>
                <div className='flex font-poppins font-sans flex-row justify-between items-center  h-[100%] w-[97%] mx-auto'>
                    <div className='w-[90%]'>
                        <h1 className='font-bold font-poppins font-sans uppercase'>{props.name}</h1>
                    </div>
                    <div className='flex text-[0.90rem]  font-poppins font-sans flex-row w-[10%] justify-between'>
                        <p className='md:text-white text-[#7c7f90]'>Yocast</p>
                        <p className='text-[grey] md:block hidden  font-bold-0 uppercase'>admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar