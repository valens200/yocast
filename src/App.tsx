import { useState } from 'react'
import './App.css'
import Home from './pages/dashboards/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Podcasts from './pages/dashboards/Podcasts'
import CreatePodcast from './pages/dashboards/CreatePodcast'
import Subscriptions from './pages/dashboards/Subscriptions'
import For04 from './pages/dashboards/For04'
import Login from './pages/authentication/Login'
import Signup from './pages/authentication/Signup'
import ResetPassword from './pages/authentication/ResetPassword'
import PodcastDetails from './pages/dashboards/PodcastDetails'
function App() {
  return (
    <Router >
      <Routes>
        <Route path="/auth/reset_password" element={<ResetPassword />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path='/create_podcast' element={<CreatePodcast />} />
        {/* <Route path='*' element={<For04 />} /> */}
      </Routes>
    </Router>
  )
}

export default App
