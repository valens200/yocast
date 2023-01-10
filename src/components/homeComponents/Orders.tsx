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
      <div className={isDarkMode ? 'md:w-[70%] w-[100%] h-[50vh]  md:h-[57vh]  overflow-scroll md:h-[76vh]  bg-[#212529]' : ' w-[100%]  md:h-[57vh]   md:w-[30%] h-[50vh] md:h-[80%]   bg-white'}>
        <div className='w-[98%] mx-auto border  border-[0.1px]  border-[#32383e] border-x-0 border-t-0  flex justify-between flex-row h-[50%] space-y-4'>
          <CarouselProvider
            className='w-[50%] mt-4 h-[50%]'
            naturalSlideHeight={800}
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
          <div className='w-[50%] h-[89%]'>
            <img className='w-[100%] h-[100%]' src="data:image/jpeg;base64,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" alt="" />
          </div>
        </div>
        <div className='w-[100%]'>
          <div className='w-[96%] font-sans flex flex-col space-y-3 font-poppins pt-6 mx-auto'>
            <div>
              <h1 className='font-bold text-[#CED4DA] '>{selectedPodcast.name}</h1>
            </div>
            <div className='flex w-[100%] flex-col space-y-4 md:space-y-0 space-x-0 md:space-x-4 text-[0.80rem] md:flex-row'>
              <p className='border w-[30%] border-[0.1px] border-[#32383e] border-y-0  border-l-0 flex items-center'>{"Seller : " + user.names.split(" ")[0]}</p>
              <p className='border w-[50%] border-[0.1px] border-[#32383e] border-y-0   border-l-0 flex items-center'>{"Created : " + selectedPodcast.createdAt}</p>
              <p className='border w-[30%] border-[0.1px] border-[#32383e]  border-y-0 border-l-0 flex items-center '>{"updated : " + selectedPodcast.updatedAt}</p>
            </div>
            <div className='font-poppins w-[100%]  font-sans text-[0.80rem]'>
              <p className='text-[grey]'>{`(4.5k customer reviews)`}</p>
              <div className='flex flex-row space-x-7 justify-between'>
                <p className='font-bold border text-[#CED4DA] border-[0.1px] border-[#32383e] border-dashed  p-2 rounded text-[1rem]'>{"Category : " + selectedPodcast.category}</p>
                <p className='font-bold  text-[#CED4DA] border border-[0.1px] border-[#32383e] border-dashed  p-2 rounded text-[1rem]'>{"Price : " + selectedPodcast.price + "$"}</p>
                <p className='font-bold  text-[#CED4DA] border border-[0.1px] border-[#32383e] border-dashed  p-2 rounded text-[1rem]'>{"Likes : " + selectedPodcast.likes + "M"}</p>
                <p className='font-bold  text-[#CED4DA] border border-[0.1px] border-[#32383e] border-dashed  p-2 rounded text-[1rem]'>{"Views : " + selectedPodcast.views + "M"}</p>
              </div>
              <div className='mt-2'>
                <p className='text-[0.90rem] smallcase text-[#7C7F90] '>{selectedPodcast.description}</p>
                <div className='w-[100%]  flex flex-row justify-between'>
                  <div className='w-[44%]'>
                    <div className='flex flex-col space-y-4'>
                      <p className="font-poppins text-[0.80rem] font-sans font-bold text-[grey]">CUSTOMER REVIEWS</p>
                      <p className={isDarkMode ? ' text-end text-white  bg-[#2a2f34] p-2 rounded font-sans font-poppins text-[0.80rem]' : 'text-end text-white  bg-[#f3f3f9] text-[#212529] font-sans font-poppins p-2 rounded font-poppins text-[0.80rem]'}>4.5 out of 5</p>
                      <p className="font-poppins text-[0.80rem] font-bold text-[grey]">Tatal 4.4k reviews</p>
                      <CustomerProgress />
                    </div>
                  </div>
                  <div className='w-[44%]'>
                    {clientsReviews.map((activity, index) => (
                      <div className='w-[100%] border border-dashed border-[grey] p-2 h-[10vh]' key={index}>
                        <div className='flex space-x-2 w-[100%]'>
                          <div className='w-[48%] h-[4vh]'>
                            {activity.profileImage == "" ? <div className='bg-[#f7b84b]  w-[80%] rounded-full h-[100%]'></div> : <div className='h-[100%] w-[25%] rounded-full'>
                              <img src={activity.profileImage} className="w-[100%] h-[100%]  rounded-full " alt="activity  title image" />
                            </div>}
                          </div>
                          <h1 className='text-[0.80rem] font-loboto font-sans'>{activity.message.length > lengthSample ? activity.message.substring(0, lengthSample) + "...." : activity.message.toString()}</h1>
                        </div>
                        <div className='flex  space-x-6 h-[100%] w-[80%] mx-auto   border-y-0 border-r-0'>
                          <div className='border border-[0.01rem] border-[grey] h-[100%]  hidden border-dashed border-y-0 border-r-0'></div>
                          <div className='text-[grey] text-[0.90rem]'>
                            <p className='font-dancing font-sans'>{"by " + activity.reviewer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={isDarkMode ? 'md:w-[30%]   w-[100%] flex items-center md:h-[76vh] ' : ' w-[100%] md:w-[67%]  flex items-center   bg-white md:h-[57vh] h-[80%]'}>
        <div className="overflow-x-scroll text-[0.80rem] w-[100%] h-[100%] relative shadow-md sm:rounded-lg">
          <table className="w-full  h-[100%] text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className={isDarkMode ? 'bg-[#212529]  text-[#7c7f90]' : 'bg-white '}>
                {ordersTableHeders.map((header, index) => (
                  <th key={index} scope="col" className="py-3 px-6">
                    <div className="flex items-center">
                      {header}
                      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                    </div>
                  </th>

                ))}
              </tr>
            </thead>
            <tbody className='text-[0.80rem] font-poppins text-[#212529] font-sans'>
              {orders.map((order, index) => (
                // bg-[#1a1d21]"
                <tr key={index} className={isDarkMode ? "bg-[#212529] hover:border-0 h-[2%]    hover:bg-[#212529] border-[0.1px]  border-[#32383e]   border-x-0 border-t-0  " : "bg-white  hover:bg-[#f3f3f9] h-[2%] border-b dark:bg-gray-800 dark:border-gray-700"}>
                  <td scope="row" className="py-4 text-[#405189] px-6 font-medium  whitespace-nowrap dark:text-white">
                    {order.orderId}
                  </td>
                  <td scope="row" className="py-4 text-[#7c7f90] px-6 font-medium whitespace-nowrap dark:text-white">
                    {order.podcastTitle}
                  </td>
                  <td scope="row" className="py-4 flex items-center  px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img src={order.customer.customerAvatar} className="w-[9%] mr-2 h-[9%]  rounded-full " alt="activity  title image" />
                    <p className=' text-[#7c7f90]'>{order.customer.customerName}</p>
                  </td>
                  <td scope="row" className="py-4 text-[#7c7f90] px-6 font-medium whitespace-nowrap dark:text-white">
                    {order.amount}
                  </td>
                  <td scope="row" className="py-4 text-[#7c7f90] px-6 font-medium whitespace-nowrap dark:text-white">
                    {order.stattus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Orders