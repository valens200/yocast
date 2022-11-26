import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import BookMarkList from './components/BookMarkList'
import CreateBookMark from './components/CreateBookMark'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-[100%] flex  items-center  h-screen bg-black ">
      <div className='w-[98%]   flex flex-row text-white mx-auto h-[96%]'>
        <Sidebar />
        <BookMarkList />
        <CreateBookMark />
      </div>

    </div>
  )
}

export default App