import React from 'react'
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { ordersTableHeders } from '../../assets/staticAssets/data';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'
import { lengthSample } from '../../assets/staticAssets/data';
import CustomerProgress from './CustomerProgress';

import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs"
function Orders() {
  const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
  const orders = useSelector((store: RootState) => store.orders.orders);
  const user = JSON.parse(localStorage.getItem("user")!)
  const clientsReviews = useSelector((store: RootState) => store.podcasts.reviews)
  const selectedPodcast = useSelector((store: RootState) => store.podcasts.selectedPodcast);
  return (
    <div className='w-[99%] mx-auto flex items-center  md:space-y-0 space-y-8 space-x-3 md:flex-row flex-col md:justify-between h-[100%]'>
      <div className={isDarkMode ? 'md:w-[100%] w-[100%] h-[100vh]   overflow-scroll md:h-[76vh]  bg-[#212529]' : 'md:w-[70%] w-[100%] h-[50vh]   overflow-scroll md:h-[76vh]  bg-[white]'}>
        <div className='w-[98%] mx-auto border  border-[0.1px]  border-[#32383e] border-x-0 border-t-0  flex justify-between  flex-col md:flex-row  md:h-[50%] space-y-4'>
          <CarouselProvider
            className='w-[50%] mt-4 h-[50%]'
            naturalSlideHeight={500}
            naturalSlideWidth={1000}
            totalSlides={selectedPodcast.coverImages.length}
          >
            <Slider className='w-[80%]'>
              {selectedPodcast.coverImages.map((img, index) => (
                <Slide className='w-[100%] h-[100%]' key={index} index={index}>
                  <img className='w-[100%] h-[100%]' src={img} alt="" />
                </Slide>
              ))}
            </Slider>
            <div className={isDarkMode ? 'flex mt-3 justify-end w-[80%] space-x-4' : 'flex mt-3 text-black justify-end w-[80%] space-x-4'}>
              <ButtonBack className='text-3xl'><BsArrowRightCircleFill /></ButtonBack>
              <ButtonNext className='text-3xl'><BsArrowLeftCircleFill /></ButtonNext>
            </div>
          </CarouselProvider>
          <div className='w-[50%] h-[20 %]'>
          </div>
        </div>
        <div className='w-[100%]'>
          <div className='w-[96%] font-sans flex flex-col space-y-3 font-poppins pt-6 mx-auto'>
            <div>
              <h1 className='font-bold text-[#CED4DA] '>{selectedPodcast.name}</h1>
            </div>
            <div className='flex w-[100%]  wrap space-y-4 md:space-y-0 space-x-0 md:space-x-4 text-[0.80rem] md:flex-row'>
              <p className='border w-[30%] border-[0.1px] border-[#32383e] border-y-0  border-l-0 flex items-center'>{"Seller : " + user.names.split(" ")[0]}</p>
              <p className='border w-[50%] border-[0.1px] border-[#32383e] border-y-0   border-l-0 flex items-center'>{"Created : " + selectedPodcast.createdAt}</p>
              <p className='border w-[30%] border-[0.1px] border-[#32383e]  border-y-0 border-l-0 flex items-center '>{"updated : " + selectedPodcast.updatedAt}</p>
            </div>
            <div className='font-poppins w-[100%]  flex flex-col space-y-4 md:space-y-0 font-sans text-[0.80rem]'>
              <p className='text-[grey]'>{`(4.5k customer reviews)`}</p>
              <div className='flex flex-wrap space-y-2 md:space-y-0 md:flex-row space-x-7 justify-between'>
                <p className='font-bold border text-[#CED4DA] border-[0.1px] border-[#32383e] border-dashed  p-2 rounded text-[1rem]'>{"Category : " + selectedPodcast.category}</p>
                <p className='font-bold  text-[#CED4DA] border border-[0.1px]  border-[#32383e] border-dashed  p-2 rounded text-[1rem]'>{"Price : " + selectedPodcast.price + "$"}</p>
                <p className='font-bold  text-[#CED4DA] border border-[0.1px] border-[#32383e] border-dashed  p-2 rounded text-[1rem]'>{"Likes : " + selectedPodcast.likes + "M"}</p>
                <p className='font-bold  text-[#CED4DA] border border-[0.1px] border-[#32383e] border-dashed  p-2 rounded text-[1rem]'>{"Views : " + selectedPodcast.views + "M"}</p>
              </div>
              <div className='mt-2'>
                <p className='text-[0.90rem] smallcase text-[#7C7F90] '>{selectedPodcast.description}</p>
                <div className='w-[100%] mt-4  h-[10%]  flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between'>
                  <div className='md:w-[90%] flex flex-col md:flex-row justify-between w-[95%] mx-auto'>
                    <div className='md:w-[80%] w-[95%]  mx-auto h-[20%] overflow-scroll'>

                    </div>
                    <div className='flex w-[90%] mx-auto md:w-[20%] flex-col space-y-4'>
                      <p className="font-poppins text-[0.80rem] font-sans font-bold text-[grey]">CUSTOMER REVIEWS</p>
                      <p className={isDarkMode ? ' text-end text-white  bg-[#2a2f34] p-2 rounded font-sans font-poppins text-[0.80rem]' : 'text-end text-white  bg-[#f3f3f9] text-[#212529] font-sans font-poppins p-2 rounded font-poppins text-[0.80rem]'}>4.5 out of 5</p>
                      <p className="font-poppins text-[0.80rem] font-bold text-[grey]">Tatal 4.4k reviews</p>
                      <CustomerProgress />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders