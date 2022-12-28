import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
function Charts() {
  const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
  return (
    <div className='w-[100%] flex md:flex-row flex-col md:justify-between h-[100%]'>
        <div className={ isDarkMode ? 'w-[65%]  bg-[#212529] h-[100%]':'w-[65%]  bg-white h-[100%]'}>

        </div>
        <div className={isDarkMode ?  'w-[34%]  bg-[#212529] h-[100%]' : 'w-[34%]  bg-white h-[100%]'}>

        </div>

    </div>
  )
}

export default Charts