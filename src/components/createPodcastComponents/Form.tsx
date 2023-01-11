import React, { useCallback, useEffect, useMemo, useState } from 'react'
import getSidebarFormDivs, { baseUrl } from '../../assets/staticAssets/data'
import { inputFieldType } from '../../types/appTypes';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import JoditEditor from 'jodit-react';
import JoditReact from "jodit-react-ts";
import 'jodit/build/jodit.min.css';
import { useDropzone } from 'react-dropzone';
import Dropzone from 'react-dropzone';
import { initializePodCast } from '../../features/podCastSlice';
import { useDispatch } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@material-ui/core';
import { cloudinaryUrl } from '../../assets/staticAssets/data';
import axios from 'axios';
import { setShowBackDrop } from '../../features/pageSlice';
import BackDrop from '../homeComponents/BackDrop';

function Form() {
    const sidebarFormDivs = getSidebarFormDivs();
    const dispatch = useDispatch();

    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const [coverImages, setCoverImages] = useState<File[]>([]);
    const [coverLinks, setCoverLinks] = useState<String[]>();
    const showBackDrop = useSelector((store: RootState) => store.page.showBackDrop);
    const podcastTobeSaved = useSelector((store: RootState) => store.podcasts.podcast)
    const user = JSON.parse(localStorage.getItem("user")!)
    const [value, setValue] = useState<string>();
    const { getRootProps, getInputProps, acceptedFiles } =
        useDropzone({});

    const formData = new FormData();
    formData.append("upload_preset", "yijpeydg");

    const authorization = {
        headers: { Authorization: `Bearer ${user.token.token}` }
    }
    const file = {
        files: coverImages[0]
    }
    const registerPodcast = () => {
        axios.post(baseUrl + "/admin/podcast", {
            cover: "https://yocast-api.nextreflexe.com/images/background/yocast.jpeg",
            owner: user.email,
            name: "BEST OF MOSSAD 15-18- HACIYE UWAMBAYE MU BITERO BYO GUHITANA ABATEGETSI",
            description: "BEST OF MOSSAD 15-18- HACIYE UWAMBAYE MU BITERO BYO GUHITANA ABATEGETSI",
            price: 700,
            category: "Business",
            url: "https://yocast-api.nextreflexe.com/videos/podcasts/2021-08-26T11:11:45.357ZBEST OF MOSSAD 15-18- HACIYE UWAMBAYE MU BITERO BYO GUHITANA ABATEGETSI.mp4",
        },
            authorization,
        ).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        setCoverImages(acceptedFiles);
    }, [coverImages])
    const getDivClass = (index: number): String => {
        if (index === 0) {
            return isDarkMode ? "md:h-[35vh] h-[50vh] rounded  flex  flex-col space-y-4  bg-[#212529]" : "md:h-[35vh] h-[50vh] r rounded  flex flex-col space-y-4  bg-white";
        }
        return isDarkMode ? "md:h-[22vh] h-[50vh] rounded flex flex-col space-y-4  bg-[#212529]" : "md:h-[22vh] h-[50vh] rounded flex flex-col space-y-4  bg-white";
    }
    const getInput = (inputField: inputFieldType, divTitle: String) => {
        if (inputField.type === "select") {
            return <select onChange={(e) => dispatch(initializePodCast({ key: divTitle, value: e.target.value }))} className={isDarkMode ? 'w-[100%]  border border-[0.1px]  border-[#32383e] rounded  pl-3 focus:outline-0 bg-[#2a2f34] h-[100%]' : 'w-[100%]  border border-[0.1px]  border-[#32383e] rounded  pl-3 focus:outline-0 bg-white h-[100%]'} name="select">
                {inputField.options?.map((option, index) => (
                    <option key={index}>{option}</option>
                ))}
                <option value="main">main</option>
            </select>

        } else if (inputField.type === "button") {
            return <button className='w-[100%] bg-[#405189] rounded hover:bg-[#364574] text-[#fff] h-[100%]'>Filters</button>
        } else {
            return <input onChange={(e) => dispatch(initializePodCast({ key: divTitle, value: e.target.value.toString() }))} className={isDarkMode ? 'bg-[#2a2f34] border border-[0.1px]  border-[#32383e]  rounded focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]' : 'bg-white border border-[0.1px]  border-[#32383e]  rounded focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]'} placeholder={inputField.placeholder.toString()} type={inputField.type.toString()} />
        }
    }
    const config = {
        style: {
            backgroundColor: 'white',
            color: '#2a2f34',
        },
    };
    return (
        <div className={isDarkMode === true ? 'w-[100%]  font-poppins flex md:flex-row flex-col space-y-4 md:space-y-0  justify-between text-[0.80rem] h-[100%]' : 'w-[100%] text-[#212529] font-poppins flex md:flex-row flex-col space-y-4 md:space-y-0  justify-between text-[0.80rem] h-[100%]'}>
            <div className={isDarkMode === true ? 'md:w-[67%] flex  items-center  bg-[#212529] h-[40%] font-sans md:h-[90%]' : 'md:w-[67%] flex  items-center  bg-white  h-[100%] font-sans md:h-[90%]'}>
                <div className='flex w-[95%]  mx-auto  h-[95%]'>
                    <div className=' w-[100%] w-[100%]  flex-col space-y-8 md:space-y-5 h-[100%]'>
                        <div className=' flex w-[100%] h-[20%]  md:h-[10%] flex-col space-y-2 mx-auto'>
                            <div className='md:h-[100%] h-[100%] w-[100%]'>
                                <input onChange={(e) => dispatch(initializePodCast({ key: 'title', value: e.target.value.toString() }))} placeholder='Enter product title' className={isDarkMode ? 'bg-[#262A2F] border border-[0.1px]  border-[#32383e]   focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[40%] md:h-[60%]' : 'bg-white border border-[0.1px]  border-[#32383e]   focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[40%] md:h-[60%]'} type="text" />
                            </div>
                        </div>
                        <BackDrop />
                        <div className='w-[100%] flex  space-y-2 h-[30%]   flex-col space-y-10 mx-auto'>
                            <div className='flex  flex-col h-[10%]'>
                                <h1 className='text-[0.90rem]'>Podcast phumbnail or cover image</h1>
                                <p className='text-[#7c7f90]'>Drag &amp; drop the podcast cover image here</p>
                            </div>
                            <div className={isDarkMode ? ' text-center text-[1rem]  flex justify-center items-center bg-[#212529]  border-[0.1px]  border-[#32383e] border-dashed  text-[#CED4DA]   focus:outline-0 fous:border  focus:border-[#32383e] pl-4  w-[100%] h-[80%]' : ' text-center text-[#495057] flex justify-center items-center text-[1rem] bg-white  border-[0.1px]  border-[#32383e] border-dashed  text-[#CED4DA]   focus:outline-0 fous:border items-center  focus:border-[#32383e] pl-4  w-[100%] h-[80%]'}>
                                <div className="container">
                                    <div {...getRootProps({ className: "dropzone" })}>
                                        <input id='file-input' {...getInputProps()} />
                                        <label htmlFor="file-input">Drag 'n' drop the cover image  here</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] flex  space-y-2 h-[40%]   flex-col space-y-6 mx-auto'>
                            <div className='flex  flex-col h-[10%]'>
                                <h1 className='text-[0.90rem]'>Podcast File</h1>
                                <p className='text-[#7c7f90]'>Drag &amp; drop the podcast file here</p>
                            </div>
                            <div className={isDarkMode ? ' text-center text-[1rem]  flex justify-center items-center bg-[#212529]  border-[0.1px]  border-[#32383e] border-dashed  text-[#CED4DA]   focus:outline-0 fous:border  focus:border-[#32383e] pl-4  w-[100%] h-[80%]' : ' text-center text-[#495057] flex justify-center items-center text-[1rem] bg-white  border-[0.1px]  border-[#32383e] border-dashed  text-[#CED4DA]   focus:outline-0 fous:border items-center  focus:border-[#32383e] pl-4  w-[100%] h-[80%]'}>
                                <div className="container">
                                    <div {...getRootProps({ className: "dropzone" })}>
                                        <input id='file-input' {...getInputProps()} />
                                        <label htmlFor="file-input">Drag 'n' drop some files here</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-[99%] h-[12%]   items-center justify-end'>
                            <button onClick={registerPodcast} className='bg-[#0ab39c] w-[13%] h-[40%] rounded  text-[#fff] hover:bg-[#099885]'>Submit</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='md:w-[32%]  font-sans  h-[60%] md:h-[90%] '>
                <div className='w-[100%] h-[100%] flex flex-col space-y-8 mx-auto'>
                    {sidebarFormDivs.map((div, index) => (
                        <div className={getDivClass(index).toString()} key={index}>
                            <div className='border border-[0.1px]  border-[#32383e]    border-x-0 border-t-0'>
                                <p className='p-3'>{div.title}</p>
                            </div>
                            <div className='w-[95%] flex flex-col h-[60%] space-y-4 mx-auto'>
                                {div.inputs.map((input, index) => (
                                    <div className='flex flex-col h-[70%] md:h-[78%] space-y-7' key={index}>
                                        <div className='flex h-[10%]'>
                                            <h1 className='text-[0.90rem] text-[#7c7f90]'>{input.label}</h1>
                                        </div>
                                        {getInput(input, input.label)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className='flex w-[99%] h-[16%] block md:hidden   items-center justify-end'>
                        <button onClick={registerPodcast} className='bg-[#0ab39c] w-[30%] h-[55%] rounded  text-[#fff] hover:bg-[#099885]'>Submit</button>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default Form

function useRer(arg0: null) {
    throw new Error('Function not implemented.');
}
