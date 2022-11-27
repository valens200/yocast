import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import logoo from "../assets/images/logoo.png"
import { BsFillFilePptFill, BsFillFileEaselFill, BsPlusLg } from 'react-icons/bs'
import { useAppDispatch } from '../store'
import { useEffect, useState } from 'react'
import { setSelectedCategory, initilizerCategories, setShowSmallSidebar } from '../features/BookMarkSlice'
import { GiCrossMark } from "react-icons/gi"
import { setShowForm } from '../features/BookMarkSlice'
import { bookMark } from '../types/appTypes'
import { category } from '../types/appTypes'
import ReactDOM from 'react-dom'
import { Slide, Fade } from 'react-awesome-reveal'
function SmallSidebar() {
    const dispatch = useAppDispatch();
    const showForm = useSelector((store: RootState) => store.bookmarks.showForm)
    const Categories = useSelector((store: RootState) => store.bookmarks.Categories)
    const showSmallSidebar = useSelector((store: RootState) => store.bookmarks.showSmallSidebar)
    const SidebarRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const addClass = () => {
            if (showForm) {
                SidebarRef.current?.classList.add('filter');
            } else {
                SidebarRef.current?.classList.remove('filter');
            }
        }
        dispatch((initilizerCategories(JSON.parse(localStorage.getItem("bookMarks")!))));
        addClass();
    }, [showForm])

    return showSmallSidebar == false ? null : ReactDOM.createPortal(<div ref={SidebarRef} className='w-[100%]  p-4 absolute bg-black  text-white -translate-y-[100vh] md:hidden flex flex-col space-y-[20%] h-[100%]'>
        <Fade>
            <div className='flex items-center flex-row space-x-2'>
                <div className='flex'>
                    <img className='w-[20%]' src={logoo} />
                    <p>Bookmarker</p>
                </div>
                <div className='w-[20%]  float-right'>
                    <GiCrossMark className="font-bold text-2xl" onClick={() => dispatch(setShowSmallSidebar(false))} />
                </div>
            </div>
            <div className='flex border p-4 border-x-0 border-t-0 w-[96%] mx-auto  flex-col space-y-5'>
                <div className='flex items-center  space-x-4 flex-row'>
                    <BsFillFileEaselFill className='text-[2rem] text-[grey]' />
                    <p className='hover:text-[grey] hover:cursor-pointer'>View all bookMarks</p>
                </div>
                <div className='flex  space-x-4 items-center  flex-row'>
                    <BsFillFilePptFill className='text-[2rem] text-[grey]' />
                    <p className='hover:text-[grey] hover:cursor-pointer'>popular to day</p>
                </div>
            </div>
            <div className='  flex flex-col border border-x-0 border-t-0  h-[50vh] border-[grey] pb-10 w-[96%] mx-auto  space-y-9'>
                <h1 className='text-[grey] hover:text-[white]'>My Categories</h1>
                {Categories == null ? null :

                    <div className='overflow-y-scroll'>
                        <Slide>
                            {Categories.map((bookMark, index) => (
                                <div key={index} onClick={() => dispatch(setSelectedCategory(bookMark))} className='flex hover:bg-[#217AFF] items-center p-2 space-x-4 '>
                                    <div className='w-[20%] flex  '>
                                        <img className='h-[100%] w-[100%1' src={bookMark.image} />
                                    </div>
                                    <div className='flex flex-row  items-center justify-between space-x-20'>
                                        <p className=''>{bookMark.name}</p>
                                        <p className='bg-[#27285C] p-4 h-[80%] font-bold rounded'>{bookMark.bookMarks.length}</p>
                                    </div>

                                </div>

                            ))}
                        </Slide>
                    </div>
                }
            </div>
            <div className='flex space-x-4 items-center'>
                <p className='bg-[#27285C] p-4 font-bold rounded text-white'> <BsPlusLg /></p>
                <p>New Category...</p>
            </div>
        </Fade>

    </div>, document.getElementById("sidebar")!
    )
}

export default SmallSidebar