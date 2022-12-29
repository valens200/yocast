import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
function Charts() {
  const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
  return (
    <div className='w-[95%] h-[100%] mx-auto flex md:flex-row  md:spacepy-0 space-y-10 flex-col md:justify-between '>
        <div className={ isDarkMode ? 'md:w-[65%]  bg-[#212529] h-[40vh]':'md:w-[65%]  bg-white h-[100%]'}>

        </div>
        <div className={isDarkMode ?  'md:w-[34%]  bg-[#212529] h-[100%]' : 'md:w-[34%]  bg-white h-[100%]'}>

        </div>

    </div>
  )
}

export default Charts