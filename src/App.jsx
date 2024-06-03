import React from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'

const App = () => {
  return (
    <div className='flex w-[100%] h-[100%]  bg-gradient-to-tr from-[#ff4066] to-[#fff16a]'>
      <SideNav/>
      <Main/>
    </div>
  )
}

export default App