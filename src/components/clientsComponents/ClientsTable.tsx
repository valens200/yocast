import { Button } from '@material-ui/core'
import React from 'react'
import { inputFieldType } from '../../types/appTypes'
import { clientsButtons, inputFields,subscriptionTableHeaders } from '../../assets/staticAssets/data'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
function ClientsTable() {
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const subscriptions = useSelector((store: RootState) => store.subscriptions.subscriptions);
    const getButtonClass = (index: number) => {
        if (index === 0) {
            return isDarkMode ? "w-[50%] font-poppins rounded h-[100%] bg-[#0ab39c] hover:bg-[#099885] text-[#fff]" : "w-[50%] font-poppins rounded h-[100%] bg-[#0ab39c] hover:bg-[#099885] text-[#fff]"
        }
        return "w-[30%]  font-poppins font-sans rounded h-[100%] bg-[#299cdb]  hover:bg-[#2385ba] text-[#fff]"
    }
    const getInputFieldClass = (index: number) => {
        if (index == 0) {
            return "md:w-[50%] font-sans font-poppins w-[100%] h-[100%]"
        }
        return "md:w-[15%] w-[100%] h-[100%]"
    }

    //getting inputFields to be used based on their types

    const getInputField = (inputField: inputFieldType) => {
        if (inputField.type === "select") {
            return <select className={isDarkMode ? 'w-[100%]  rounded  pl-3 focus:outline-0 bg-[#2a2f34] h-[100%]' : 'w-[100%]  rounded  pl-3 focus:outline-0 bg-[#f3f3f9] text-[#212529] h-[100%]'} name="select">
                {inputField.options?.map((option, index) => (
                    <option key={index}>{option}</option>
                ))}
                <option value="main">main</option>
            </select>
        } else if (inputField.type === "button") {
            return <button className={'w-[100%] bg-[#405189] font-sans font-poppins rounded hover:bg-[#364574] text-[#fff] h-[100%]'}>Filters</button>
        } else {
            // bg-[#f3f3f9] 
            return <input className={isDarkMode ? ' bg-[#2a2f34] font-poppins   font-sans rounded focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]' : ' bg-[#f3f3f9] font-poppins  font-sans rounded text-[#212529] focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]'} placeholder={inputField.placeholder.toString()} type={inputField.type.toString()} />
        }

    }
    return (
        <div className='w-[100%]  flex-col  flex justify-between h-[100%]'>
            <div className={isDarkMode ? 'w-[100%] p-4  space-y-10 flex flex-col  items-center bg-[#212529] h-[96%]' : 'w-[100%]   space-y-10 flex flex-col p-4   flex items-center bg-white bg-white h-[96%]'}>
                <div className=' flex flex-col space-y-10 h-[40%] md:h-[20%] w-[100%]'>
                    <div className='md:h-[50%] h-[7vh] border border-dashed border-t-0 border-x-0  border-[0.1px]  border-[#32383e]  w-[100%] mx-auto'>
                        <div className='w-[96%] tems-center  flex  h-[100%] justify-between mx-auto'>
                            <div className=' w-[30%] md:w-[80%]'>
                                <h1>Clients List</h1>
                            </div>
                            <div className='flex space-x-1 justify-end text-[0.90rem] items-center w-[70%] md:w-[20%] h-[80%] flex-row'>
                                <button className={isDarkMode ? 'w-[20%] rounded h-[100%]   bg-[#F065481A]' : 'w-[20%] rounded h-[100%]   bg-[#F065481A]'}></button>
                                {clientsButtons.map((button, index) => (
                                    <button className={getButtonClass(index)} key={index}>{button.title}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='md:h-[50%] h-[30vh] flex items-center'>
                        <div className='flex w-[80%] md:mt-0 mt-5 md:w-[95%] h-[100%] md:h-[100%] text-[0.80rem] font-poppins mx-auto  items-center flex-col md:space-y-0 space-y-4 md:flex-row justify-between'>
                            {inputFields.map((input, index) => (
                                <div key={index} className={getInputFieldClass(index)}>
                                    {getInputField(input)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="overflow-x-scroll text-[0.80rem] w-[100%] h-[100%] relative shadow-md sm:rounded-lg">
                    <table className="w-full  h-[100%] text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className={isDarkMode ? 'bg-[#212529]  text-[#7c7f90]' : 'bg-white '}>
                                {subscriptionTableHeaders.map((header, index) => (
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
                            {subscriptions.map((subscription, index) => (
                                <tr key={index} className={isDarkMode ? "bg-[#212529] hover:border-0 h-[2%]    hover:bg-[#212529] border-[0.1px]  border-[#32383e]   border-x-0 border-t-0  " : "bg-white  hover:bg-[#f3f3f9] h-[2%] border-b dark:bg-gray-800 dark:border-gray-700"}>
                                    <td scope="row" className="py-4 text-[#405189] px-6 font-medium  whitespace-nowrap dark:text-white">
                                        {subscription.id}
                                    </td>
                                    <td scope="row" className="py-4 flex items-center h-[10%]  px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img src={subscription.owner?.avatar} className="md:w-[4.2vw] w-[35%] h-[5vh] mr-2 md:h-[8vh]  rounded-full " alt="subscription image" />
                                        <p className=' text-[#7c7f90]'>{subscription.owner?.name}</p>
                                    </td>
                                    <td scope="row" className="py-4 text-[#7c7f90] px-6 font-medium whitespace-nowrap dark:text-white">
                                        {subscription.transactionId}
                                    </td>
                                    <td scope="row" className="py-4 text-[#7c7f90] px-6 font-medium whitespace-nowrap dark:text-white">
                                        {subscription.paymentMethod}
                                    </td>
                                    <td scope="row" className="py-4 text-[#7c7f90] px-6 font-medium whitespace-nowrap dark:text-white">
                                        {subscription.price}
                                    </td>
                                    <td scope="row" className="py-4 text-[#7c7f90] px-6 font-medium whitespace-nowrap dark:text-white">
                                        {subscription.currency}
                                    </td>
                                    <td scope="row" className="py-4 text-[#7c7f90] px-6 font-medium whitespace-nowrap dark:text-white">
                                        {subscription.desactivationDate}
                                    </td>
                                    <td scope="row" className="py-4 text-[#7c7f90] px-6 font-medium whitespace-nowrap dark:text-white">
                                        {subscription.created}
                                    </td>
                                    <td scope="row" className="py-4 text-[#7c7f90] px-6 font-medium whitespace-nowrap dark:text-white">
                                        {subscription.updates}
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

export default ClientsTable