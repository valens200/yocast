import React from 'react'
import SvgData from './svg'
function Nodata() {
    return (
        <div className='flex flex-col'>
            <div className='w-[90%]  mx-auto h-[10%]'>
                <SvgData />
            </div>
            <p className='text-end  font-bold text-[#D3D3E8] text-3xl   font-loboto'>This category has no bookMarks</p>
        </div>
    )
}

export default Nodata