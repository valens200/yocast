import { useSelect } from '@mui/base'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

function Header() {
    const isDarkMode = useSelector((store:RootState) => store.page.isDarkMode);
    return (
        <h1 className={isDarkMode ? 'text-3xl uppercase font-poppins font-bold font-sans' : 'text-3xl  font-sans text-black uppercase font-poppins font-bold'}>yocast</h1>
    )
}

export default Header