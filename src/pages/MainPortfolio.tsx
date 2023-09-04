import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

const MainPortfolio: React.FC = () => {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 grid-12'>
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl"><Sidebar /></div>
      <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl"><h1>Main Content</h1></div>
    </div>
  )
}

export default MainPortfolio