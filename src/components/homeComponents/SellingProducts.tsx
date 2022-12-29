import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { tableHeaders } from '../../assets/staticAssets/data';
function SellingProducts() {
  const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
  const availablePodcasts = useSelector((store: RootState) => store.podcasts.availablePodcasts)
  return (
    <div className='w-[100%] flex md:flex-row flex-col justify-between h-[100%]'>
      <div className={isDarkMode ? 'w-[100%]  bg-[#212529]  items-center flex  h-[100%]' : 'w-[100%] items-center flex h-[100%]'}>
        <div className="overflow-x-auto podcasts h-[90%] relative shadow-md sm:rounded-lg">
          <div className={ isDarkMode ? ' bg-[#212529] flex items-center text-[#212529] h-[18%] dark:bg-gray-700':' bg-white flex items-center text-[#212529] h-[18%] dark:bg-gray-700'}>
            <div className='w-[95%] font-poppins font-sans  h-[90%] md:h-[50%] flex md:flex-row flex-col justify-between mx-auto'>
              <p className='font-poppins font-sans text-[#7c7f90]  text-[0.90rem]'>Best Selling Products</p>
              {/* bg-[#262A2F]  */}
              <div className={ ' w-[100%] md:w-[50%] h-[100%]  flex justify-end'}>
                <select name="sort" className={ isDarkMode ? 'w-[30%]  text-[#7c7f90] bg-[#262A2F]  text-center rounded text-[0.80rem] h-[90%]' : 'w-[30%] text-center rounded text-[0.80rem] h-[90%]'} value="SORT" id="sort">
                  <option className='text-start' value="Last day">Last day</option>
                  <option className='text-start' value="Last month">Last month</option>
                  <option className='text-start' value="Last six months">Last month</option>
                  <option className='text-start' value="Last year"></option>
                </select>
              </div>
            </div>
          </div>
          <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className={ isDarkMode ? "text-xs  text-[#7c7f90] bg-[#212529] text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400":"text-xs bg-white  text-gray-700    border border-x-0 border-t-0 border-[#f3f3f9] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"}>
              <tr className='text-[#7c7f90]'>
                <th scope="col" className="py-3 px-6">
                </th>
                {tableHeaders.map((header, index) => (
                  <th key={index} scope="col" className="py-3 px-6">
                    <div className="flex items-center">
                      {header}
                      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                    </div>
                  </th>
                ))}
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className='text-[0.80rem] font-poppins text-[#212529] font-sans'>
              {availablePodcasts.map((podcast, index) => (
                <tr className={ isDarkMode ? "bg-[#212529] text-[#7c7f90]  h-[8vh] hover:border-0 hover:bg-[#212529] border-[0.1px]  border-[#32383e]   border-x-0 border-t-0 ":"bg-white  hover:bg-[#f3f3f9] border-b dark:bg-gray-800 dark:border-gray-700"}>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-900 w-[10%] dark:text-white">
                    <img src={podcast.cover} className="w-[30%] h-[30%]  rounded " alt="activity  title image" />
                  </td>
                  <td scope="row" className="py-4 text-[#7c7f90]  px-6 font-medium  whitespace-nowrap ">
                    {podcast.name}
                  </td>
                  <td className="py-4 px-6">
                    polytical
                  </td>
                  <td className="py-4 px-6">
                    {podcast.length}
                  </td>
                  <td className="py-4 px-6">
                    {podcast.likes}
                  </td>
                  <td className="py-4 px-6">
                    {podcast.views}
                  </td>
                  <td className="py-4 px-6">
                    {podcast.time}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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