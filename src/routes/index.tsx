import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPortfolio from '../pages/MainPortfolio'

const Routing: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPortfolio />} />
    </Routes>
  )
}

export default Routing