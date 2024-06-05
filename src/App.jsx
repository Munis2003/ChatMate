import React from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'

const App = () => {
  return (
    <div id='app' className='flex w-[100%] h-screen'>
      <SideNav/>
      <Main/>
    </div>
  )
}

export default App