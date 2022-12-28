import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
function Orders() {
  const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
  return (
    <div className='w-[100%] flex  md:flex-row flex-col justify-between h-[100%]'>
        <div className={ isDarkMode  ? 'w-[100%]  flex items-center   bg-[#212529] h-[100%]' : 'w-[100%]  flex items-center   bg-white h-[100%]'}>
          <p className={ isDarkMode ? 'text-center w-[100%] text-[0.90rem] font-bold font-poppins  font-sans': 'text-center w-[100%] text-[0.90rem]  text-[#212529] font-bold font-poppins  font-sans'}>Sorr!! this page is still under development</p>
        </div>
    </div>
  )
}

export default Orders