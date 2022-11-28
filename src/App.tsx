import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import BookMarkList from './components/BookMarkList'
import CreateBookMark from './components/CreateBookMark'
import Landing from './pages/Landing'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/dashboard" element={<Landing />}></Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
