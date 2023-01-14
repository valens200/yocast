import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { baseUrl, lengthSample, tableHeaders } from '../../assets/staticAssets/data';
import { Podcast } from '../../types/appTypes';
import { GrAssistListening } from 'react-icons/gr';
import { initializeLoggedInUser } from '../../features/userSlice';
import { intilializePodcasts } from '../../features/podCastSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setLoading, setMessage, setPodcastPostedSucessfully, setShowAlerts } from '../../features/pageSlice';
import Backdrop from '@mui/material/Backdrop';
import UpdateForm from '../createPodcastComponents/UpdateForm';
import { AiFillDelete } from 'react-icons/ai';
import { HiPencilSquare } from 'react-icons/hi2';
function SellingProducts(props : Podcast[]) {
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast>();
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [podcastToUpdate, setPodcastToUpdate] = useState<Podcast>()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user")!);
  const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
  const availablePodcasts = useSelector((store: RootState) => store.podcasts.availablePodcasts);

  const deletePodcast = () => {
    setLoading(true);
    axios({
      method: "DELETE",
      url: `${baseUrl}/admin/podcast/${selectedPodcast?.id}`,
      headers: {
        Authorization: `Bearer ${user.token.token}`,
        'Content-Type': "application/json"
      }
    }).then((response) => {
      setLoading(false);
      setOpen(false)
      dispatch(setShowAlerts(true))
      dispatch(setPodcastPostedSucessfully(true))
      setTimeout(() => {
        dispatch(setPodcastPostedSucessfully(false))
        dispatch(setShowAlerts(false))
      }, 5000)
      setMessage({ message: "Podcast deleted successfully" })
    }).catch((error) => {
      setLoading(false);
      setOpen(false)
      dispatch(setShowAlerts(true))
      dispatch(setPodcastPostedSucessfully(false))
      setTimeout(() => {
        dispatch(setShowAlerts(false))
        dispatch(setPodcastPostedSucessfully(false))
      }, 5000)
      setMessage({ message: "Some thing went wrong !" })
    })
  }
  const updatePodcast = (podcast: Podcast) => {
    setPodcastToUpdate(podcast);
    setOpenUpdateModal(true);
  }

  const getTime = (podcast: Podcast): String => {
    const createdAt = podcast.createdAt;
    const year = Number.parseInt(createdAt.split("-")[0]);
    const day = Number.parseInt(createdAt.split("-")[2].split("T")[0]);
    const month = Number.parseInt(createdAt.split("-")[1]);
    const curentDate = new Date();
    if (year < curentDate.getFullYear()) {
      return curentDate.getFullYear() - year + "years ago";
    } else if (month < curentDate.getMonth()) {
      return curentDate.getMonth() - month + " months agp";
    } else if (curentDate.getDay() > day) {
      return curentDate.getDay() - day + " days ago";
    } else {
      return "to day"
    }
  }
  const showModal = (podcast: Podcast) => {
    setSelectedPodcast(podcast);
    setOpen(true);
  }
  return (
    <div className='w-[100%] flex md:flex-row flex-col justify-between h-[100%]'>
      <div className={isDarkMode ? 'w-[40%]  bg-[#212529]   items-center flex  h-[100%]' : 'w-[40%] shadow-lg items-center flex h-[100%]'}>

      </div>
      <div className={isDarkMode ? 'md:w-[58%]  w-[95%] mx-auto bg-[#212529]  items-center flex  h-[100%]' : 'w-[100%] items-center flex h-[100%]'}>
        <div className="overflow-x-auto podcasts h-[90%] relative shadow-md sm:rounded-lg">
          <div className={isDarkMode ? ' bg-[#212529] flex items-center text-[#212529] h-[18%] dark:bg-gray-700' : ' bg-white flex items-center text-[#212529] h-[18%] dark:bg-gray-700'}>
            <div className='w-[95%] font-poppins font-sans  h-[90%] md:h-[50%] flex md:flex-row flex-col justify-between mx-auto'>
              <p className='font-poppins font-sans text-[#7c7f90]  text-[0.90rem]'>Best Selling Podcasts</p>
              {/* bg-[#262A2F]  */}
              <div className={' w-[100%] md:w-[50%] h-[100%]  flex justify-end'}>
                <select onChange={() => console.log("")} name="sort" className={isDarkMode ? 'w-[30%]  text-[#7c7f90] bg-[#262A2F]  text-center rounded text-[0.80rem] h-[90%]' : 'w-[30%] text-center rounded text-[0.80rem] h-[90%]'} value="SORT" id="sort">
                  <option className='text-start' value="Last day">Last day</option>
                  <option className='text-start' value="Last month">Last month</option>
                  <option className='text-start' value="Last six months">Last month</option>
                  <option className='text-start' value="Last year"></option>
                </select>
              </div>
            </div>
          </div>
          <Backdrop
            open={openUpdateModal}
            sx={{ height: "100%", color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <div className='w-[80%] mx-auto h-[90%] flex-col space-y-4 flex justify-between items-center'>
              <h1 className='font-poppins font-sans font-bold'>Update your podcast</h1>
              <UpdateForm setOpenUpdateModal={setOpenUpdateModal} podcastTopudate={podcastToUpdate} />
            </div>
          </Backdrop>
          <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className={isDarkMode ? "text-xs  text-[#7c7f90] bg-[#212529] text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400" : "text-xs bg-white  text-gray-700    border border-x-0 border-t-0 border-[#f3f3f9] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"}>
              <tr className='text-[#7c7f90]'>
                {tableHeaders.map((header, index) => (
                  <th scope="col" className="px-3 py-2">
                    {header}
                  </th>
                ))}
                <th scope="col" className="px-3  py-2">
                  <p></p>
                </th>
                <th scope="col" className="py-3  px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className='text-[0.80rem] font-poppins text-[#212529] font-sans'>
              {availablePodcasts.map((podcast, index) => (
                <tr className={isDarkMode ? " border-b hover:border-0 h-[2%]   border-[0.1px]  border-[#32383e]   border-x-0 border-t-0  dark:bg-gray-800 dark:border-gray-700" : " hover:bg-[#f3f3f9]  "}>
                  <th scope="row" className="px-6 py-4 text-[#6B7280] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className='md:w-[7vw] xl:w-[3vw] xl:h-[5.2vh] lg:w-[6.4vw] w-[35%] h-[5vh] mr-2 md:h-[8vh]  rounded-full' src={podcast.cover.toString()} alt="covermage" />
                    {podcast.name}
                  </th>
                  <td className="px-3 text-[#6B7280] py-2">
                    {podcast.category}
                  </td>
                  <td className="px-3 text-[#6B7280] py-2">
                    {podcast.likes}
                  </td>
                  <td className="px-3  text-[#6B7280] py-2">
                    {podcast.views.toString()}
                  </td>
                  <td className="px-3 text-[#6B7280] py-2">
                    {getTime(podcast)}
                  </td>
                  <td className="px-3 py-2 text-right">
                    <button onClick={() => updatePodcast(podcast)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-[1.5rem]"><HiPencilSquare /></button>
                  </td>
                  <td className="px-3 py-2 text-right">
                    <button onClick={() => showModal(podcast)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline  text-[1.5rem]"><AiFillDelete className='text-[#F06548A1]' /></button>
                  </td>
                </tr>

              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
}

export default SellingProducts

function setOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}
