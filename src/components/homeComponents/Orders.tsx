import React from 'react'
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { ordersTableHeders } from '../../assets/staticAssets/data';
function Orders() {
  const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
  const orders = useSelector((store: RootState) => store.orders.orders);
  return (
    <div className='w-[100%] flex items-center  space-x-3 md:flex-row flex-col justify-between h-[100%]'>
      <div className={isDarkMode ?  'w-[33%] h-[80%] bg-[#212529]'  : 'w-[30%] h-[80%] bg-white' }>

      </div>
      <div className={isDarkMode ? 'w-[64%]  flex items-center  h-[80%]' : 'w-[67%]  flex items-center   bg-white h-[80%]'}>
        <div className="overflow-x-scroll text-[0.80rem] w-[100%] h-[100%] relative shadow-md sm:rounded-lg">
          <table className="w-full  h-[100%] text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className={ isDarkMode ? 'bg-[#212529]  text-[#7c7f90]' : 'bg-white '}>
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
                <tr key={index} className={ isDarkMode ? "bg-[#212529]   hover:bg-[#212529] border-[0.1px]  border-[#32383e]   border-x-0 border-t-0  ":"bg-white  hover:bg-[#f3f3f9] border-b dark:bg-gray-800 dark:border-gray-700"}>
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

                  <td className="py-4 px-6">
                    {order.amount}
                  </td>
                  <td className="py-4 px-6">
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