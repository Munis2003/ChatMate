import React from 'react'

const Main = () => {
  return (
    <div className='w-[85%] m-3 rounded-2xl bg-zinc-100/95 '>

       <div className='max-w-[900px] m-auto'>
        {/* greet */}
        <div className='greet mt-[34px] text-[45px] font-[500] text-zinc-900/70'>
            <p><span className='text-transparent'>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
        </div>

        {/* cards */}
        <div className='cards flex items-center gap-5 mt-32'>
        <div className='w-52 h-32 border-[1.4px] border-transparent  p-2 bg-white/80 rounded-xl'>
            <p></p>
        </div>

        <div className='w-52 h-32 bg-gradient-to-br from-[#6157ff] to-[#ee49fd] rounded-xl'>
            <p></p>
        </div>

        <div className='w-52 h-32 bg-gradient-to-br from-[#0172af] to-[#74febd] rounded-xl'>
            <p></p>
        </div>

        <div className='w-52 h-32 bg-gradient-to-tr from-[#103ce7] to-[#64e9ff] rounded-xl'>
            <p></p>
        </div>
        </div>

        <input className='outline-none pl-5 bg-white mt-7 w-[99%] p-2 text-zinc-600/70 rounded-md' type="text" placeholder='Hnji phuchiye?' />
        
        </div>
    </div>
  )
}

export default Main