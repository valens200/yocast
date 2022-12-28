import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Footer() {
  const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const date = new Date;
  return (
    <div className={ isDarkMode ?  'w-[100%] p-2  font-poppins justify-between px-2 flex items-center text-[grey] font-sans  bg-[#212529] h-[100%]' : 'w-[100%] p-2  font-sans font-poppins justify-between px-2 flex items-center text-[grey]  bg-white h-[100%]'}>
        <p className='text-[0.80rem]'> <span>{date.getFullYear()}</span><span>&copy;yocast</span></p>
        <p className='text-[0.80rem]'>designed &amp; developed by Emmanuel NT.dev</p>
    </div>
  )
}

export default Footer