import React from 'react'
import SvgData from './svg'
function Nodata() {
    return (
        <div className='h-[70vh] flex-col'>
            <div className='w-[90%]  mx-auto h-[70%]'>
                <SvgData />
            </div>
            <p className='text-end  font-bold text-[#D3D3E8] text-3xl   font-loboto'>This category has no bookMarks</p>
        </div>
    )
}

export default Nodata