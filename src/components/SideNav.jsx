import React, { useContext } from 'react'
import {assets} from '../../src/assets/assets'
import { Context } from '../context/Context'

const SideNav = () => {

    const {onSet, prevPrompt,setRecentPrompt} = useContext(Context)

    const loadPrompt =  async(prompt) =>{
        setRecentPrompt(prompt)
        await onSet(prompt)
    }
  return (
    <div className='w-[15%] flex flex-col justify-between p-3 pr-0 pt-5'>
       
        <div className='top-cont'> 
        {/* logo */}
        <a href="/"><img className='w-[80px] mb-2 mt-[-8%] ' src='/public/logo.png' alt="" /></a>

        {/* new chat */}
        <div className='new chat flex items-center gap-3 border-[1.4px] border-[#353a63] p-2 pr-3 rounded-md'>
            <i className="ri-add-line flex text-zinc-400 text-[15px]"></i>
            <p className='text-sm text-zinc-400'>New chat</p>
        </div>

        {/* Recent */}
        <p className='text-md font-[450] mt-4 text-zinc-400 mb-2'>Recent</p>
        {prevPrompt.map((item)=>{
            return(
                <div onClick={()=>loadPrompt(item)} className='flex items-center gap-3  pl-3 mb-2 border-transparent p-2 rounded-md bg-[#353a63]/50'>
                <i className="ri-message-2-line text-zinc-400 text-[15px] pt-1"></i>
                <p className='text-sm text-zinc-400'>{item.slice(0,18)}...</p>
                </div>
            )
        })}
      
        </div>  

        <div className='bottom-cont'>
            {/* <div className='w-full h-24 bg-gradient-to-tr from-orange-100 to-red-400 rounded-md border-[1.4px] border-[#353a63] mb-2'>

            </div> */}
        {/* Settings */}
        <div className='flex gap-3 mb-1'>
            <i className="ri-settings-5-line text-zinc-400 text-[15px]"></i>
            <p className='text-sm text-zinc-400'>Settings</p>
        </div>

        
        {/* Help */}
        <div className='flex gap-3'>
            <i className="ri-question-line text-zinc-400 text-[15px]"></i>
            <p className='text-sm  text-zinc-400 mb-3'>Help</p>
        </div>

        {/* user */}
        <div className='flex items-center gap-3 border-t-[1px] border-[#353a63]'>
            <div className='bg-blue-400 overflow-hidden mt-3 rounded-full'>
            <img className='w-[30px]' src={assets.user_icon} alt="" />
            </div>
            <p className='text-sm text-zinc-400'>Munis Abbas</p>
        </div>

        </div>
    </div>
  )
}

export default SideNav