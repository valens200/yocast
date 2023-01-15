import React from 'react'
import { Podcast } from '../../types/appTypes'
import ReactAudioPlayer from 'react-audio-player'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { getClassName } from 'jodit/types/core/helpers'
import { ImCross } from 'react-icons/im'


function PodcastDetails() {
  const selectedPodcast = useSelector((store: RootState) => store.podcasts.selectedPodcast);
  const getClassName = () => {
    return "bg-[url('" + selectedPodcast.cover + "')]";
  }
  return (
    <div className='h-screen  w-[100%] flex items-center justify-center'>
      <div className='w-[60%] h-[65%] rounded bg-white '>

        <div className="w-[100%] h-[40%]">
          <img className='w-[100%] h-[100%]' src={selectedPodcast.cover} alt="" />
        </div>
        <p className='text-white  fixed top-[30%]  flex p-2 float-right text-end'><ImCross /></p>
        <ReactAudioPlayer className='z-20  w-[40%]  mx-auto -translate-y-[13vh]' src={selectedPodcast.url} controls />
        <div className='w-[95%]  flex flex-col space-y-6  text-[black] mx-auto '>
          <div className='font-poppins font-sans'>
            <h1 className='font-poppins font-sans'>{selectedPodcast.name}</h1>
            <p className='text-[0.89rem] text-[#7c7f90]'>{selectedPodcast.description}</p>
          </div>
          <div className='flex  font-poppins font-sans justify-between'>
            <div className='flex flex-col space-y-2'>
              <p><span className='font-bold'>Category</span> : <span className='text-[#7c7f90]'>{selectedPodcast.category}</span></p>
              <p><span className='font-bold'>Created</span> : <span className='text-[#7c7f90]'>{selectedPodcast.createdAt}</span></p>
              <p><span className='font-bold'>Created</span> : <span className='text-[#7c7f90]'>{selectedPodcast.updatedAt}</span></p>
            </div>
            <div className='flex flex-col font-poppins font-sans space-y-2'>
              <p><span className='font-bold'>Likes</span> : <span className='font-bold text-2xl'>{Number.parseInt(selectedPodcast.likes) >= 1000 ? selectedPodcast.likes + " K" : selectedPodcast.likes}</span></p>
              <p><span className='font-bold'>Views</span> : <span  className='font-bold text-2xl'>{Number.parseInt(selectedPodcast.views) >= 1000 ? selectedPodcast.views + " K" : selectedPodcast.views}</span></p>
            </div>
          </div>
          <div className='flex flex-row  font-popins font-sans justify-end space-x-3'>
            <button className='bg-[#0ab39c] w-[15%] p-2 rounded font-bold text-white'>Update</button>
            <button className='bg-[#F06548A1] w-[15%] p-2 rounded font-bold text-white'>Delete</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default PodcastDetails