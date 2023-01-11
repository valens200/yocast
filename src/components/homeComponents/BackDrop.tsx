import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@material-ui/core';
import { cloudinaryUrl } from '../../assets/staticAssets/data';
import axios from 'axios';
import { setShowBackDrop } from '../../features/pageSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Backdrop from '@mui/material/Backdrop';

function BackDrop() {
    const showBackDrop = useSelector((store: RootState) => store.page.showBackDrop);
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme: { zIndex: { drawer: number; }; }) => theme.zIndex.drawer + 1 }}
            open={showBackDrop}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default BackDrop