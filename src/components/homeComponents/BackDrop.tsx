import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@material-ui/core';
import { cloudinaryUrl } from '../../assets/staticAssets/data';
import axios from 'axios';
import { setShowBackDrop } from '../../features/pageSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Backdrop from '@mui/material/Backdrop';
import { AiOutlineCheck } from 'react-icons/ai'
import { Zoom } from 'react-awesome-reveal';

function BackDrop() {
    const podcastPostedSucessfully = useSelector((store: RootState) => store.page.podcastPostedSucessfully);
    const showBackDrop = useSelector((store: RootState) => store.page.showBackDrop);
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme: { zIndex: { drawer: number; }; }) => theme.zIndex.drawer + 1 }}
            open={showBackDrop}
        >
            {podcastPostedSucessfully ? <Zoom>
                <div className='text-[white]] w-[80%] h-[11vh]  text-[0.80rem] p-2 rounded-full bg-[#198754]'>
                    <p className='text-center flex items-center  justify-center'><AiOutlineCheck className='text-3xl' /></p>
                    <p className='text-center font-poppins font-sans font-bold'>created successfully</p>
                </div> </Zoom> : <CircularProgress color="inherit" />
            }

        </Backdrop>
    )
}

export default BackDrop