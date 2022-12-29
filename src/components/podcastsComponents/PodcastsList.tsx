import { Category } from '@mui/icons-material';
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
function PodcastsList() {
    const podcastsCategories = useSelector((store: RootState) => store.podcasts.podcastsCategories);
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const getClass = (selected: boolean) => {
        if (selected) {
            // bg-[#f3f3f9]
            return isDarkMode ?  " text-[#0ab39c] hover:cursor-pointer ": " text-[#0ab39c] hover:cursor-pointer " ;
        } else {
            return isDarkMode ?  "hover:cursor-pointer text-white" : "hover:cursor-pointer text-[#212529] text-white";
        }
    }
    return (
        <div className='w-[100%] flex md:flex-row flex-col md:space-y-0 space-y-4 justify-between h-[100%]'>
            <div className={ isDarkMode ? 'md:w-[25%] flex items-center   bg-[#212529] h-[80%]' : 'md:w-[25%] flex items-center   bg-white text-[#212529] h-[80%]'}>
                <div className='w-[95%] flex  h-[94%] flex-col space-y-10 mx-auto'>
                    <div className='flex flex-row justify-between'>
                        <h1>Filters</h1>
                        <p className={ isDarkMode ? "font-poppins text-[0.80rem] underline  hover:cursor-pointer text-[#ced4da]" : "font-poppins text-[0.80rem] underline  hover:cursor-pointer text-[#405189] font-poppins font-sans"}>clear All</p>
                    </div>
                    <div className='h-[6%]'>
                        <input className={ isDarkMode ? 'bg-[#2a2f34]  focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]' : 'bg-white border   text-[#212529] focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]'} type="text" />
                    </div>
                    <div className={ isDarkMode ? 'border flex flex-col space-y-5 p-3 border-x-0 border-[#32383e] border-[0.1px]':'border flex flex-col space-y-5 p-3 border-x-0 border-[#212529] border-[0.1px]'}>
                        <p>CATEGORIES</p>
                        <div className='flex flex-col space-y-2 text-[0.89rem] text-[grey]'>
                            {podcastsCategories.map((Category, index) => (
                                <div key={index} className='flex flex-row justify-between'>
                                    <p className={getClass(Category.selected)}>{Category.category}</p>
                                    <p className={ isDarkMode ? 'bg-[#2A2F34] text-[9px] text-[#878A99] items-center flex justify-center w-[7%] text-center rounded-full':'bg-[#F3F6F9]  items-center flex justify-center text-[9px] text-[#405189] w-[7%] text-center rounded-full'}>{Category.availablePodcasts}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={ isDarkMode ? 'md:w-[73%]   flex items-center bg-[#212529] h-[100%]'  :  'md:w-[73%]   flex items-center bg-white h-[100%]'}>
                <div className='w-[95%] mx-auto h-[95%] '>
                    <div className='w-[100%] flex h-[5%] items-center  flex-row justify-between  mx-auto'>
                        <div className='w-[50%]  flex justify-start h-[100%]'>
                            <button className='bg-[#0ab39c] text-[0.90rem] h-[100%]  w-[70%] md:w-[25%]  h-[4vh] md:h-[80%] rounded hover:bg-[#099885]  border border-[#0ab39c] active:border-[#088675] text-[white]'>Add Product </button>
                        </div>
                        <div className='w-[40%]  flex justify-end h-[100%]'>
                            <input className={ isDarkMode ? 'bg-[#2a2f34]  rounded pl-10 h-[100%] w-[100%] h-[4vh] md:w-[60%] text-[0.90rem] h- focus:outline-0 fous:border focus:border-[#32383e]  pl-4  w-[100%] h-[100%]' : 'bg-white border  rounded border-[#ced4da]  pl-10 h-[100%] w-[100%] h-[4vh] md:w-[60%] text-[0.90rem] h- focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]'} type="text" placeholder='Search podcasts....' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PodcastsList