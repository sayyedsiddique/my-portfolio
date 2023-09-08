import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPortfolio from '../pages/MainPortfolio'
import About from '../pages/About/About'
import Resume from '../pages/Resume/Resume'
import Projects from '../pages/Projects/Projects'

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPortfolio />}>
        <Route path='/' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        {/* <Route path='/resume' element={<MainPortfolio />} /> */}
      </Route>
    </Routes>
  )
}

export default Routing