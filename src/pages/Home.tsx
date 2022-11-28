import React from 'react'
import logoo from "../assets/images/logoo.png"
import Navigation from '../components/Navigation'

function Home() {
    return (
        <div className="h-screen">
            <div className=' w-[100vw] flex items-center h-[6vh] '>
                <Navigation />
            </div>

        </div>
    )
}

export default Home