import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
function SellingProducts() {
  const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
  return (
    <div className='w-[100%] flex md:flex-row flex-col justify-between h-[100%]'>
        <div className={isDarkMode ?  'w-[48%]  bg-[#212529] h-[100%]' : 'w-[48%]  bg-white  h-[100%]'}>

        </div>
        <div className={ isDarkMode ?  'w-[50%]  bg-[#212529] h-[100%]' : 'w-[50%]  bg-white h-[100%]'}>

        </div>

    </div>
  )
}

export default SellingProducts