import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, store } from '../store'
import { Button } from '@material-ui/core'
import Rating from '@mui/material/Rating';
import { useAppDispatch } from '../store'
import { BsXLg, BsXSquareFill } from "react-icons/bs"
import { Links } from '../assets/data'
import { setShowNavigation } from '../features/pageSlice'
import { navButtons } from '../assets/data'
import { Slide } from 'react-awesome-reveal'
function SmallNavigation(): React.ReactPortal | null {
    const dispatch = useDispatch();
    const [value, setValue] = useState(3);
    const showSmallNavigation = useSelector((store: RootState) => store.page.showSmallNavigation);

    const getClass2 = (link: string) => {
        if (link == 'Login') {
            return "hover:cursor-pointer border w-[8vw] h-[80%] font-bold pt-1 text-center items-center rounded "
        } else if (link == "Get started") {
            return "hover:cursor-pointer bg-[blue] h-[80%] w-[14%] font-bold pt-1 text-center items-center rounded  ";
        } else {
            return "hover:cursor-pointer font-bold hover:underline"
        }
    }

    const getClass = (index: number) => {
        if (index == 1) {
            return "text-white bg-black hover:bg-white hover:text-black hover:border  h-[4vh] w-[40%] rounded-full";
        } else {
            return "hover:text-[grey]"
        }
    }
    return showSmallNavigation == true ? ReactDOM.createPortal(<div className='h-[40vh] p-2 md:hidden  bg-white z-20  float-right rounded fixed  top-[3%]  w-[40%]  mx-auto  bg-white  border '>
        <div className='w-[100%] mx-auto  mb-3  h-[100%] flex    flex-col space-y-10'>
            <div className='w-[60%] mx-auto'>
                <div className='flex'>
                    <div className='w-[90%]'></div>
                    <div className='w-[10%]'>
                        <BsXSquareFill onClick={() => dispatch(setShowNavigation(false))} className='text-[2.4rem]' />
                    </div>
                </div>

                <div className='flex flex-col space-y-4 '>
                    {Links.map((link, index) => (
                        <Slide key={index}>
                            <a key={index} href={"/" + link.name}><p className={getClass2(link.name)} key={index}>{link.name}</p></a>
                        </Slide>
                    ))}
                    <div className='w-[20%] md:flex hidden text-black flex-col space-x-4'>
                        {navButtons.map((btn, index) => (
                            <button  className={getClass(index)} key={index}>{btn.name}</button>
                        ))}
                    </div>
                </div>

            </div>

        </div>

    </div>, document.getElementById("nav")!) : null
}

export default SmallNavigation