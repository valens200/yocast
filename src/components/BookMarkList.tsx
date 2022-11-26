import React, { useRef } from 'react'
import Account from './Account'
import { IoCaretDownSharp } from "react-icons/io5"
import { BsGrid3X3Gap } from "react-icons/bs"
import { BiMenuAltRight } from "react-icons/bi"
import { RootState, store, useAppDispatch } from '../store'
import { useSelector } from 'react-redux'
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai"
import { setSelectedCategory } from '../features/BookMarkSlice'
import { FiUpload } from 'react-icons/fi'
import { useEffect } from 'react'
import CreateBookMark from './CreateBookMark'
import Nodata from './Nodata'
import Form from './Form'
import { setShowForm, setSelectedBookMark, setShowUpdateForm } from '../features/BookMarkSlice'
import Update from './Update'
import { bookMark } from '../types/appTypes'
import { setShowSingleBookMark } from '../features/BookMarkSlice'
import SingleBookMark from './SIngleBookMark'
import SmallSidebar from './SmallSidebar'
function BookMarkList() {
    const dispatch = useAppDispatch();
    const selectedCategory = useSelector((store: RootState) => store.bookmarks.selectedCategory);
    let selectedCategory2: any = selectedCategory;
    const Categories = useSelector((store: RootState) => store.bookmarks.Categories)
    const showForm = useSelector((store: RootState) => store.bookmarks.showForm);
    const bookMarkListRef = useRef<HTMLDivElement>(null);
    useEffect(() => {

        const addClass = () => {
            if (showForm) {
                bookMarkListRef.current?.classList.add('filter');
            } else {
                bookMarkListRef.current?.classList.remove('filter');
            }
        }
        addClass();
    }, [showForm])

    const dispatchMethods = (data: bookMark) => {
        dispatch(setSelectedBookMark(data));
        dispatch(setShowUpdateForm(true))
    }
    const dispatchingMethods = (book: bookMark) => {
        dispatch(setSelectedBookMark(book));
        dispatch(setShowSingleBookMark(true))

    }
    return (
        <div ref={bookMarkListRef} className='w-[100%] flex  flex-col space-y-[5%]  text-black p-2 rounded-3xl bg-white h-[100%]'>
            <div className='w-[96%]  mx-auto'>
                <Account />
                <Form />
                <Update />
                <SingleBookMark />
                <SmallSidebar />
            </div>
            {selectedCategory2 == null ? null : <div className='w-[85%] flex flex-col space-y-5  mx-auto'>
                <div className='w-[100%] border border-x-0 border-t-0 pb-4  flex flex-row justify-between '>
                    <div className='flex items-center space-x-3'>
                        <h1 className='text-3xl font-loboto'>{selectedCategory2.name}</h1>
                        <span><IoCaretDownSharp className='text-2xl' /></span>
                    </div>
                    <div className='flex space-x-5 '>
                        <BsGrid3X3Gap className='text-[#D3D3E8] text-3xl' />
                        <BiMenuAltRight className='text-3xl font-bold' />
                    </div>
                </div>
                {selectedCategory.bookMarks.length == 0 ?
                    <Nodata /> :
                    <div className='h-[70vh]  overflow-y-scroll'>
                        {selectedCategory2.bookMarks.map((bookmark: any, index: React.Key | null | undefined) => (
                            <div key={index} onClick={() => dispatchingMethods(bookmark)} className='flex md:flex-row flex-col hover:shadow-lg items-center   space-x-6 h-[30%]'>
                                <div className='border md:block hidden  w-[2.3%] rounded-full h-[15%]'>

                                </div>
                                <div className='flex   md:flex-row flex-col items-center space-x-4 w-[90%]'>
                                    <img className=' md:float-0 float-left md:w-[8%] w-[20%] rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNV_R9wdjNX96P2-KjPKpxhuwLsb5DHwDTpQ&usqp=CAU" />
                                    <div>
                                        <h1 className='font-loboto font-bold'>{bookmark.title}</h1>
                                        <p>Lorem ipsum dolor magni doloribus suscipit  quaerat Lorem ipsum dolor magni doloribus suscipit  quaerat?</p>
                                    </div>
                                    <div className='flex text-[#D3D3E8] space-x-4 text-[1.2rem]'>
                                        <AiTwotoneEdit onClick={() => dispatchMethods(bookmark)} className='hover:text-black ' />
                                        <AiFillDelete className='hover:text-black ' />
                                        <FiUpload className='hover:text-black ' />
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                }
            </div>}

        </div>
    )
}

export default BookMarkList