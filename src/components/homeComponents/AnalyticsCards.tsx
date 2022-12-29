import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

function AnalyticsCards() {
    const analyticsCards = useSelector((store: RootState) => store.page.analyticsCards);
    const isDarkMode = useSelector((store: RootState) => store.page.isDarkMode);
    return (
        <div className='text-white items-center md:space-y-0 space-y-6  font-poppins  md:h-[100%] flex flex-col md:flex-row justify-between md:w-[95%] w-[90%]  mx-auto '>
            {analyticsCards.map((card, index) => (
                <div className={ isDarkMode ? 'flex transition hover:-translate-y-2 delay-100 duration-300 rounded bg-[#212529]  md:h-[20vh] h-[20vh] w-[100%] md:w-[24%] p-5  flex-col md:space-y-0 space-y-3':'flex transition hover:-translate-y-2 delay-100 duration-300 rounded bg-white  md:h-[20vh] h-[20vh] w-[100%] md:w-[24%] p-5 text-[#212529] font-poppins font-sans  flex-col md:space-y-0 space-y-3'} key={index}>
                    <div className='flex  h-[20%] items-center flex-row justify-between'>
                        <p className='text-[grey]'>{card.title}</p>
                        <p className=''>{card.percentage}</p>
                    </div>
                    <div className='flex h-[80%] items-center flex-row justify-between'>
                        <div className='flex  h-[100%] justify-between flex-col space-y-4'>
                            <h1 className='font-bold'>{card.calue}</h1>
                            <p className={ isDarkMode ? 'text-[white] text-[0.90rem] underline hover:text-white hover:cursor-pointer':'text-[#405189] text-[0.90rem] underline hover:text-white hover:cursor-pointer'}>{card.view}</p>
                        </div>
                        <div className={ card.backgroundColor + " text-[0.90rem] w-[10%] md:w-[15%] md:h-[40%]  h-[30%] flex justify-center items-center  p-2 rounded font-bold text-center  translate-y-[100%] "}>
                            {card.icon}
                        </div>
                    </div>

                </div>
            ))}

        </div>
    )
}

export default AnalyticsCards