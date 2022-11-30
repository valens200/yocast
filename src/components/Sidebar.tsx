import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import logoo from "../assets/images/logoo.png"
import { BsFillFilePptFill, BsFillFileEaselFill, BsPlusLg } from 'react-icons/bs'
import { useAppDispatch } from '../store'
import { useEffect, useState } from 'react'
import { setSelectedCategory, initilizerCategories } from '../features/BookMarkSlice'
import { setShowForm } from '../features/BookMarkSlice'
import { bookMark, category } from '../types/appTypes'
import { setShowNavigation } from '../features/pageSlice'
function Sidebar() {
    const dispatch = useAppDispatch();
    const showForm = useSelector((store: RootState) => store.bookmarks.showForm)
    const Categories = useSelector((store: RootState) => store.bookmarks.Categories)
    const SidebarRef = useRef<HTMLDivElement>(null);
    const selectedCategory = useSelector((store: RootState) => store.bookmarks.selectedCategory);
    useEffect(() => {
        // localStorage.setItem('bookMarks', JSON.stringify(Categories));
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

    const dispatchMethods = (bookMark: category) => {
        dispatch(setShowNavigation(false))
        dispatch(setSelectedCategory(bookMark))
    }

    return (
        <div ref={SidebarRef} className='w-[100%]  z-100 flex flex-col space-y-[20%] h-[100%]'>
            <div className='flex items-center flex-row space-x-2'>
                <img className='w-[20%]' src={logoo} />
                <p>Bookmarker</p>
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
                {Categories == null ? <div className='text-white'>
                    <p>Your category is just empty</p>
                </div> :
                    <div className='overflow-y-scroll'>
                        {Categories.map((bookMark, index) => (
                            <div key={index} onClick={() => dispatchMethods(bookMark)} className={selectedCategory.id == bookMark.id ? 'flex bg-[#217AFF] items-center p-2 space-x-4 ' : 'flex hover:bg-[#217AFF] items-center p-2 space-x-4 '} >
                                <div className='w-[20%] flex  '>
                                    <img className='h-[100%] w-[100%1' src={bookMark.image} />
                                </div>
                                <div className='flex flex-row  items-center justify-between space-x-20'>
                                    <p className=''>{bookMark.name}</p>
                                    <p className='bg-[#27285C] p-4 h-[80%] font-bold rounded'>{bookMark.bookMarks.length}</p>
                                </div>

                            </div>

                        ))}
                    </div>
                }
            </div>
            <div className='flex space-x-4 items-center'>
                <p onClick={() => dispatch(setShowForm(true))} className='bg-[#27285C] p-4 font-bold rounded text-white'> <BsPlusLg /></p>
                <p>New Category...</p>
            </div>

        </div>
    )
}

export default Sidebar