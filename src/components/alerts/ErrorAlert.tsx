import React from 'react'
import { Slide, Zoom } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
function ErrorAlert(props: { Content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    const podcastCreatedSucessfully = useSelector((store: RootState) => store.page.podcastPostedSucessfully);
    const showAlerts = useSelector((store: RootState) => store.page.showAlerts)
    const isDarkMode: boolean = useSelector((store: RootState) => store.page.isDarkMode);
    return (
        <div>
            <div className='transition '>
                {!podcastCreatedSucessfully && showAlerts ? <Zoom ><Alert className="md:w-[30%]  h-[30%] sticky top-0  w-[100%] z-100 mx-auto " sx={{ height: "7vh", backgroundColor: isDarkMode ? "" : "" }} security="sucess">
                    <AlertTitle>Error</AlertTitle>
                    {props.Content}</Alert></Zoom> : null}
            </div>
        </div>
    )
}

export default ErrorAlert