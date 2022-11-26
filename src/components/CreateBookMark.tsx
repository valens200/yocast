import React from 'react'
import ReactDOM from 'react-dom'
import {BsPlusLg} from "react-icons/bs"
import { setShowForm } from '../features/BookMarkSlice'
import { useAppDispatch } from '../store'
import { setShowSingleBookMark } from '../features/BookMarkSlice'
function CreateBookMark() {
    const dispatch = useAppDispatch();
    return ReactDOM.createPortal(<div className='w-[100%] text-white h-[10vh] absolute   flex  fixed top-[80%] '>
        <div className='items-center w-[80%] mx-auto items-center h-[100%] flex   justify-end'>
            <div onClick={ () => dispatch(setShowForm(true))} className='md:w-[5%] w-[20%]   text-center items-center   flex justify-center rounded-full  bg-black float-right  h-[75%]'>
                <BsPlusLg className='text-[white] text-3xl  text-center main  ' />
            </div>
        </div>
    </div>, document.getElementById("create")!)
}

export default CreateBookMark