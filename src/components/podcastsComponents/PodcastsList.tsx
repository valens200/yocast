import { Category } from '@mui/icons-material';
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { tableHeaders } from '../../assets/staticAssets/data';
import { AiFillDelete } from 'react-icons/ai'
import { HiPencilSquare } from 'react-icons/hi2'
import { lengthSample } from '../../assets/staticAssets/data';
import { GrAssistListening } from 'react-icons/gr'
import { setSelected } from '../../features/podCastSlice';
import { useAppDispatch } from '../../store';
import { useEffect } from 'react';
function PodcastsList() {
    const podcastsCategories = useSelector((store: RootState) => store.podcasts.podcastsCategories);
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const availablePodcasts = useSelector((store: RootState) => store.podcasts.availablePodcasts);
    const selectedCategory = podcastsCategories.filter((Category) => Category.selected == true)[0];
    const dispatch = useAppDispatch();
    let podcasts;
    const isAnyCategoryClicked = useSelector((store: RootState) => store.podcasts.categoryClicked);
    const getClass = (selected: boolean) => {
        if (selected) {
            return isDarkMode ? " text-[#0ab39c] hover:cursor-pointer " : " text-[#0ab39c] hover:cursor-pointer ";
        } else {
            return isDarkMode ? "hover:cursor-pointer text-white" : "hover:cursor-pointer text-[#212529] text-white";
        }
    }
    return (
        <div className='w-[100%] flex md:flex-row flex-col md:space-y-0 space-y-4 justify-between h-[100%]'>
            <div className={isDarkMode ? 'md:w-[25%] flex items-center   bg-[#212529] h-[80%]' : 'md:w-[25%] flex items-center   bg-white text-[#212529] h-[80%]'}>
                <div className='w-[95%] flex  h-[94%] flex-col space-y-10 mx-auto'>
                    <div className='flex flex-row justify-between'>
                        <h1>Filters</h1>
                        <p className={isDarkMode ? "font-poppins text-[0.80rem] underline  hover:cursor-pointer text-[#ced4da]" : "font-poppins text-[0.80rem] underline  hover:cursor-pointer text-[#405189] font-poppins font-sans"}>clear All</p>
                    </div>
                    <div className='h-[6%]'>
                        <input className={isDarkMode ? 'bg-[#2a2f34]  focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]' : 'bg-white border   text-[#212529] focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]'} type="text" />
                    </div>
                    <div className={isDarkMode ? 'border flex flex-col space-y-5 p-3 border-x-0 border-[#32383e] border-[0.1px]' : 'border flex flex-col space-y-5 p-3 border-x-0 border-[#212529] border-[0.1px]'}>
                        <p>CATEGORIES</p>
                        <div className='flex flex-col space-y-2 text-[0.89rem] text-[grey]'>
                            <div className='flex flex-row justify-between'>
                                <p className={isAnyCategoryClicked && isDarkMode ? "  text-white hover:cursor-pointer " : " text-[#0ab39c] hover:cursor-pointer "}>All</p>
                            </div>
                            {podcastsCategories.map((Category, index) => (
                                <div key={index} className='flex flex-row justify-between'>
                                    <p onClick={() => dispatch(setSelected({ id: Category.id }))} className={getClass(Category.selected)}>{Category.category}</p>
                                    <p className={isDarkMode ? 'bg-[#2A2F34] text-[9px] text-[#878A99] items-center flex justify-center w-[7%] text-center rounded-full' : 'bg-[#F3F6F9]  items-center flex justify-center text-[9px] text-[#405189] w-[7%] text-center rounded-full'}>{Category.availablePodcasts}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={isDarkMode ? 'md:w-[73%]   flex items-center bg-[#212529] h-[100%]' : 'md:w-[73%]   flex items-center bg-white h-[100%]'}>
                <div className='w-[95%] mx-auto overflow-scroll h-[100%] '>
                    <div className='w-[100%] flex h-[5%] items-center  flex-row justify-between  mx-auto'>
                        <div className='w-[50%]  flex justify-start h-[100%]'>
                            <button className='bg-[#0ab39c] text-[0.90rem] h-[100%]  w-[70%] md:w-[25%]  h-[4vh] md:h-[80%] rounded hover:bg-[#099885]  border border-[#0ab39c] active:border-[#088675] text-[white]'>Add Podcast </button>
                        </div>
                        <div className='w-[40%]  flex justify-end h-[100%]'>
                            <input className={isDarkMode ? 'bg-[#2a2f34]  rounded pl-10 h-[100%] w-[100%] h-[4vh] md:w-[60%] text-[0.90rem] h- focus:outline-0 fous:border focus:border-[#32383e]  pl-4  w-[100%] h-[100%]' : 'bg-white border  rounded border-[#ced4da]  pl-10 h-[100%] w-[100%] h-[4vh] md:w-[60%] text-[0.90rem] h- focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]'} type="text" placeholder='Search podcasts....' />
                        </div>
                    </div>
                    <div>
                        <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className={isDarkMode ? "text-xs  text-[#7c7f90] bg-[#212529] text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400" : "text-xs bg-white  text-gray-700    border border-x-0 border-t-0 border-[#f3f3f9] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"}>
                                <tr className='text-[#7c7f90]'>
                                    <th scope="col" className="py-3 px-6">
                                    </th>
                                    {tableHeaders.map((header, index) => (
                                        <th key={index} scope="col" className="py-3 px-6">
                                            <div className="flex items-center">
                                                {header}
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                                            </div>
                                        </th>
                                    ))}
                                    <th scope="col" className="py-3 px-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='text-[0.80rem] font-poppins text-[#212529] font-sans'>
                                {availablePodcasts.map((podcast, index) => (
                                    <tr key={index} className={isDarkMode ? "bg-[#212529] text-[#7c7f90]  h-[8vh] hover:border-0 hover:bg-[#212529] border-[0.1px]  border-[#32383e]   border-x-0 border-t-0 " : "bg-white  hover:bg-[#f3f3f9] border-b dark:bg-gray-800 dark:border-gray-700"}>
                                        <td className="py-4 pr-1 text-right">
                                            <button className="font-medium  text-[green] hover:underline"><GrAssistListening className='text-[1.6rem]' /></button>
                                        </td>
                                        <td scope="row" className="py-4 px-6 font-medium text-gray-900 w-[20%] dark:text-white">
                                            <img src={podcast.cover[0]} className="w-[30%] h-[30%]  rounded " alt="activity  title image" />
                                        </td>
                                        <td scope="row" className="py-4 text-[#7c7f90]   px-6 font-medium  whitespace-nowrap ">
                                            {podcast.name.length > lengthSample ? podcast.name.slice(0, lengthSample) + "....." : podcast.name}
                                        </td>
                                        <td className="py-4 px-6">
                                            polytical
                                        </td>
                                        <td className="py-4 px-6">
                                            {podcast.likes}
                                        </td>
                                        <td className="py-4 px-6">
                                            {podcast.views}
                                        </td>
                                        <td className="py-4 px-6">
                                            {podcast.time}
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><HiPencilSquare className='text-[1.2rem]' /></button>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <button className="font-medium text-blue-600 w-[100%] dark:text-blue-500 hover:underline"><AiFillDelete className='text-[1.3rem] text-[red]' /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PodcastsList