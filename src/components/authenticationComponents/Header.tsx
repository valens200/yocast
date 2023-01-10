import { useSelect } from '@mui/base'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

function Header() {
    const isDarkMode = useSelector((store:RootState) => store.page.isDarkMode);
    return (
        <h1 className='text-3xl uppercase font-poppins text-center font-bold font-sans'>yocast</h1>
    )
}

export default Header