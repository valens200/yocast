import { Button } from '@material-ui/core'
import React from 'react'
import { inputFieldType } from '../../types/appTypes'
import { clientsButtons, inputFields } from '../../assets/staticAssets/data'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
function ClientsTable() {
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    const getButtonClass = (index: number) => {
        if (index === 0) {
            return  isDarkMode ? "w-[50%] font-poppins rounded h-[100%] bg-[#0ab39c] hover:bg-[#099885] text-[#fff]" : "w-[50%] font-poppins rounded h-[100%] bg-[#0ab39c] hover:bg-[#099885] text-[#fff]"
        }
        return "w-[30%]  font-poppins font-sans rounded h-[100%] bg-[#299cdb]  hover:bg-[#2385ba] text-[#fff]"
    }
    const getInputFieldClass = (index: number) => {
        if (index == 0) {
            return "md:w-[50%] font-sans font-poppins w-[100%] h-[100%]"
        }
        return "md:w-[15%] w-[100%] h-[100%]"
    }
    const getInputField = (inputField: inputFieldType) => {
        if (inputField.type === "select") {
            return  <select className={ isDarkMode ? 'w-[100%]  rounded  pl-3 focus:outline-0 bg-[#2a2f34] h-[100%]':'w-[100%]  rounded  pl-3 focus:outline-0 bg-[#f3f3f9] text-[#212529] h-[100%]'} name="select">
                    {inputField.options?.map((option, index) => (
                        <option>{option}</option>
                    ))}
                    <option value="main">main</option>
                </select>

        } else if (inputField.type === "button") {
            return <button className={'w-[100%] bg-[#405189] font-sans font-poppins rounded hover:bg-[#364574] text-[#fff] h-[100%]'}>Filters</button>
        } else {
            // bg-[#f3f3f9] 
            return <input className={ isDarkMode ? ' bg-[#2a2f34] font-poppins   font-sans rounded focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]' : ' bg-[#f3f3f9] font-poppins  font-sans rounded text-[#212529] focus:outline-0 fous:border focus:border-[#32383e] pl-4  w-[100%] h-[100%]'} placeholder={inputField.placeholder.toString()} type={inputField.type.toString()} />
        }

    }
    return (
        <div className='w-[100%]  flex justify-between h-[100%]'>
            <div className={ isDarkMode ? 'w-[100%]  flex items-center bg-[#212529] h-[96%]' : 'w-[100%]  flex items-center bg-white bg-white h-[96%]'}>
                <div className='h-[96%] w-[100%]'>
                    <div className='h-[6%] border border-dashed border-t-0 border-x-0  border-[0.1px]  border-[#32383e]  w-[100%] mx-auto'>
                        <div className='w-[96%] tems-center  flex  h-[100%] justify-between mx-auto'>
                            <div className= ' w-[30%] md:w-[80%]'>
                                <h1>Clients List</h1>
                            </div>
                            <div className='flex space-x-1 justify-end text-[0.90rem] items-center w-[70%] md:w-[20%] h-[80%] flex-row'>
                                <button className={ isDarkMode ? 'w-[20%] rounded h-[100%]   bg-[#F065481A]' : 'w-[20%] rounded h-[100%]   bg-[#F065481A]'}></button>
                                {clientsButtons.map((button, index) => (
                                    <button className={getButtonClass(index)} key={index}>{button.title}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='md:h-[10%] h-[25%] flex items-center'>
                        <div className='flex w-[80%] md:mt-0 mt-5 md:w-[95%] h-[100%] md:h-[45%] text-[0.80rem] font-poppins mx-auto  items-center flex-col md:space-y-0 space-y-4 md:flex-row justify-between'>
                            {inputFields.map((input, index) => (
                                <div key={index} className={getInputFieldClass(index)}>
                                    {getInputField(input)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsTable