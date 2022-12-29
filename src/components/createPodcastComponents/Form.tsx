import React, { useMemo, useState } from 'react'
import getSidebarFormDivs from '../../assets/staticAssets/data'
import { inputFieldType } from '../../types/appTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import JoditEditor from 'jodit-react';
import JoditReact from "jodit-react-ts";
import 'jodit/build/jodit.min.css';
function Form() {
    const sidebarFormDivs = getSidebarFormDivs();
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const [value, setValue] = useState<string>();

    // bg-[#f3f3f9]
    const getDivClass = (index: number): String => {
        if (index === 0) {
            return isDarkMode ? "h-[40vh] rounded  flex  flex-col space-y-4  bg-[#212529]" : "h-[40vh] rounded  flex flex-col space-y-4  bg-white";
        }
        return isDarkMode ? "h-[30vh] rounded flex flex-col space-y-4  bg-[#212529]" : "h-[30vh] rounded flex flex-col space-y-4  bg-white";
    }
    const getInput = (inputField: inputFieldType) => {
        if (inputField.type === "select") {
            return <select className={isDarkMode ? 'w-[100%]  border border-[0.1px]  border-[#32383e] rounded  pl-3 focus:outline-0 bg-[#2a2f34] h-[100%]' : 'w-[100%]  border border-[0.1px]  border-[#32383e] rounded  pl-3 focus:outline-0 bg-white h-[100%]'} name="select">
                {inputField.options?.map((option, index) => (
                    <option key={index}>{option}</option>
                ))}
                <option value="main">main</option>
            </select>

        } else if (inputField.type === "button") {
            return <button className='w-[100%] bg-[#405189] rounded hover:bg-[#364574] text-[#fff] h-[100%]'>Filters</button>
        } else {
            return <input className={isDarkMode ? 'bg-[#2a2f34] border border-[0.1px]  border-[#32383e]  rounded focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]' : 'bg-white border border-[0.1px]  border-[#32383e]  rounded focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]'} placeholder={inputField.placeholder.toString()} type={inputField.type.toString()} />
        }

    }

    const config = {
        style: {
            backgroundColor: 'white',
            color: '#2a2f34',
            
        },
    };


    return (
        <div className={isDarkMode === true ? 'w-[100%] font-poppins flex md:flex-row flex-col space-y-4 md:space-y-0  justify-between text-[0.80rem] h-[100%]' : 'w-[100%] text-[#212529] font-poppins flex md:flex-row flex-col space-y-4 md:space-y-0  justify-between text-[0.80rem] h-[100%]'}>
            <div className={isDarkMode === true ? 'md:w-[67%] flex  items-center  bg-[#212529] h-[100%] font-sans md:h-[90%]' : 'md:w-[67%] flex  items-center  bg-white  h-[100%] font-sans md:h-[90%]'}>
                <div className='flex w-[95%]  mx-auto  h-[95%]'>
                    <div className=' w-[100%] w-[100%]  flex-col space-y-8 md:space-y-5 h-[100%]'>
                        <div className=' flex w-[100%] h-[20%]  md:h-[10%] flex-col space-y-2 mx-auto'>
                            <div className='flex'>
                                <h1 className='text-[0.90rem]'>Product Title</h1>

                            </div>
                            <div className='md:h-[35%] h-[50%] w-[100%]'>
                                <input placeholder='Enter product title' className={isDarkMode ? 'bg-[#262A2F] border border-[0.1px]  border-[#32383e]   focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]' : 'bg-white border border-[0.1px]  border-[#32383e]   focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]'} type="text" />
                            </div>
                        </div>
                        <div className='w-[100%] flex  h-[30%]  flex-col space-y-2 mx-auto'>
                            <div className='flex h-[10%]'>
                                <h1 className='text-[0.90rem]'>Product Description</h1>
                            </div>
                            <div className='h-[90%] jodit w-[100%]'>
                                <JoditReact  config={config}  defaultValue="Hi" />
                                {/* // <input placeholder='' className={isDarkMode ? 'bg-[#2a2f34] focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]' : 'bg-white border focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]'} type="text" /> */}
                            </div>
                        </div>
                        <div className='w-[100%] flex  space-y-2 h-[30%]  flex-col space-y-2 mx-auto'>
                            <div className='flex  flex-col h-[10%]'>
                                <h1 className='text-[0.90rem]'>Podcast File</h1>
                                <p className='text-[#7c7f90]'>Drag &amp; drop the podcast file here</p>
                            </div>
                            <div className='h-[90%] w-[100%]'>
                                <input placeholder='Drop files here or click to upload.' className={isDarkMode ? ' text-center text-[1rem] bg-[#212529]  border-[0.1px]  border-[#32383e] border-dashed  text-[#CED4DA]   focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]' : ' text-center text-[#495057] text-[1rem] bg-white  border-[0.1px]  border-[#32383e] border-dashed  text-[#CED4DA]   focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]'} type="text" />
                            </div>
                        </div>
                        <div className='flex w-[99%] h-[10%]   items-center justify-end'>
                            <button className='bg-[#0ab39c] w-[13%] h-[40%] rounded  text-[#fff] hover:bg-[#099885]'>Submit</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='md:w-[32%]  font-sans  h-[70%] '>
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
                                        {getInput(input)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </div >
    )
}

export default Form

function useRer(arg0: null) {
    throw new Error('Function not implemented.');
}
