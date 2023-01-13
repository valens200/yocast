import React from 'react'
import { Slide, Zoom } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { setShowAlerts } from '../../features/pageSlice';
function SucessAlert(props: { Content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    const podcastCreatedSucessfully = useSelector((store: RootState) => store.page.podcastPostedSucessfully);
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const showAlerts = useSelector((store: RootState) => store.page.showAlerts)
    return (
        <div className='transition '>
            {podcastCreatedSucessfully && showAlerts ? <Zoom ><Alert className="md:w-[30%]  h-[100%] sticky top-0  w-[100%] z-100 mx-auto " sx={{ backgroundColor: isDarkMode ? "" : "" }} security="sucess">
            <AlertTitle>Sucess</AlertTitle>
               {props.Content}</Alert></Zoom> : null}
        </div>
    )
}

export default SucessAlert