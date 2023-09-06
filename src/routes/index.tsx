import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPortfolio from '../pages/MainPortfolio'

const Routing: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPortfolio />} />
        <Route path='/projects' element={<MainPortfolio />} />
        <Route path='/resume' element={<MainPortfolio />} />
    </Routes>
  )
}

export default Routing