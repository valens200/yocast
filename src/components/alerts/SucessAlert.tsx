import React from 'react'
import { Slide, Zoom } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { setShowAlerts } from '../../features/pageSlice';
import { Root } from 'postcss';
function SucessAlert() {
    const podcastCreatedSucessfully = useSelector((store: RootState) => store.page.podcastPostedSucessfully);
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const showAlerts = useSelector((store: RootState) => store.page.showAlerts)
    const message = useSelector((store: RootState) => store.page.message)
    return (
        <div className='transition '>
            {podcastCreatedSucessfully && showAlerts ? <Zoom ><Alert className="md:w-[30%]  h-[100%] sticky top-0  w-[100%] z-100 mx-auto " sx={{ backgroundColor: isDarkMode ? "" : "" }} security="sucess">
                <AlertTitle>Sucess</AlertTitle>
                {message}</Alert></Zoom> : null}
        </div>
    )
}

export default SucessAlert