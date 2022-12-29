import { useState } from 'react'
import './App.css'
import Home from './pages/dashboards/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Podcasts from './pages/dashboards/Podcasts'
import CreatePodcast from './pages/dashboards/CreatePodcast'
import Subscriptions from './pages/dashboards/Subscriptions'
import For04 from './pages/dashboards/For04'
function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path='/create_podcast' element={<CreatePodcast />} />
        <Route path='*' element={<For04 />} />
        <Route path='/*' element={<For04 />} />
      </Routes>
    </Router>
  )
}

export default App
