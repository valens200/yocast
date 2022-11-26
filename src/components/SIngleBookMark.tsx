import React from 'react'
import ReactDOM from 'react-dom'
import { BsPlusLg } from "react-icons/bs"
import logo from "../assets/images/logoo.png"
import { formData, inputsData2, formData2 } from '../assets/data'
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core'
import { Input } from 'postcss'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { inputsData } from '../assets/data'
import { useState } from 'react'
import { BsPlus } from "react-icons/bs"
import { useAppDispatch } from '../store'
import Slider from '@material-ui/core'
import { Fade } from "react-awesome-reveal";
import { setShowForm, setShowSingleBookMark, setShowUpdateForm } from '../features/BookMarkSlice'
import { GiCrossMark } from "react-icons/gi"
import { addBookMap, createNewCatgory } from '../features/BookMarkSlice'
import { category } from '../types/appTypes'
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai"
import { FiUpload } from "react-icons/fi"
import { bookMark } from '../types/appTypes'
function SingleBookMark() {
    const [showCreateCategory, setShowCreateCategory] = useState(false);
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState("");
    const [Link, setLink] = useState("");
    const [Description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const Categories = useSelector((store: RootState) => store.bookmarks.Categories)
    const setSelectedBookMark: any = useSelector((store: RootState) => store.bookmarks.selectedBookMark);
    const ShowSingleBookMark = useSelector((store: RootState) => store.bookmarks.ShowSingleBookMark);
    const selectedBookMark = useSelector((store: RootState) => store.bookmarks.selectedBookMark);
    console.log("selected ", selectedBookMark)
    const clicked = (index: number) => {
        if (index == 1) {
            setShowCreateCategory(true)
        }
    }
    const back = (index: number) => {
        if (index == 1) {
            setShowCreateCategory(false)
        }
    }

    const handleInputs = (type: string, value: string) => {
        switch (type) {
            case 'Title':
                setTitle(value);
                break;
            case 'Link':
                setLink(value);
                // console.log(Link);
                break;
            case 'Description':
                setDescription(value);
                break;
            case 'category':
                setCategory(value);
                break;
            default:
                console.log('no property seen')
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const bookMark = { id: 1, title: title, link: Link, description: Description, category: "" };
        dispatch(addBookMap({ cat: "vava", bookMark: bookMark }));
    }

    const createCategory = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newCategory: category = {
            id: Categories.length + 1,
            name: title,
            image: "",
            bookMarks: []
        }
        dispatch((createNewCatgory(newCategory)))

    }
    const getValue = (data: string) => {
        switch (data) {
            case 'Title':
                return setSelectedBookMark.title;
                break;
            case 'name':
                return setSelectedBookMark.name;
                break;
            case 'description':
                return setSelectedBookMark.description;
                break;
            case 'id':
                return setSelectedBookMark.id;
            case 'Link':
                return setSelectedBookMark.link
        }

    }
    const dispatchMethods = (data: bookMark) => {
        dispatch(setSelectedBookMark(data));
        dispatch(setShowUpdateForm(true))
    }
    const categories = useSelector((store: RootState) => store.bookmarks.Categories);
    return ShowSingleBookMark == true ? ReactDOM.createPortal(<div className='w-[100%]  text-white h-[50vh] absolute flex  fixed top-[10%] '>
        <div className='items-center  text-black shadow-lg bg-white flex flex-col space-y-4 items-center  bg-white  md:w-[30%] mx-auto items-center h-[100%]'>
            <div className='w-[5%]  float-right'>
                <GiCrossMark className="font-bold text-2xl" onClick={() => dispatch(setShowSingleBookMark(false))} />
            </div>
            <div className='text-black flex flex-col space-y-3'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNV_R9wdjNX96P2-KjPKpxhuwLsb5DHwDTpQ&usqp=CAU" />
                <p className='font-loboto'>{selectedBookMark.title}</p>
                <div>
                    <p>{selectedBookMark.description}</p>
                </div>
                <div className='flex text-[#D3D3E8] space-x-4 text-[1.2rem]'>
                    <AiTwotoneEdit onClick={() => dispatchMethods(selectedBookMark)} className='hover:text-black   text-3xl ' />
                    <AiFillDelete className=' text-3xl  hover:text-black ' />
                    <FiUpload className=' text-3xl  hover:text-black ' />
                </div>
            </div>

        </div>
    </div >, document.getElementById("create")!) : null
}

export default SingleBookMark