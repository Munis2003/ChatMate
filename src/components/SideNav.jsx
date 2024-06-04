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
        <img className='w-[80px] mb-2 mt-[-8%] ' src='/public/logo.png' alt="" />

        {/* new chat */}
        <div className='new chat flex items-center gap-3 border-[1.4px] p-2 pr-3 rounded-md'>
            <i className="ri-add-line text-zinc-100 font-[450] text-[16px]"></i>
            <p className='text-sm font-[450] text-zinc-100  '>New chat</p>
        </div>

        {/* Recent */}
        <p className='text-md font-[550] mt-4 text-zinc-100 mb-2'>Recent</p>
        {prevPrompt.map((item)=>{
            return(
                <div onClick={()=>loadPrompt(item)} className='flex gap-3  pl-3 border-[1.4px] mb-2 border-transparent  p-2 rounded-md bg-white/15   '>
                <i className="ri-message-2-line text-zinc-100 text-[14px] font-[450]"></i>
                <p className='text-sm font-[450] text-zinc-100'>{item.slice(0,18)}...</p>
                </div>
            )
        })}
      
        </div>  

        <div className='bottom-cont'>
        {/* Settings */}
        <div className='flex gap-3 mb-1'>
            <i className="ri-settings-5-line text-zinc-100 text-[16px] font-[450]"></i>
            <p className='text-sm font-[450] text-zinc-100'>Settings</p>
        </div>

        
        {/* Help */}
        <div className='flex gap-3'>
            <i className="ri-question-line text-zinc-100 text-[16px] font-[450]"></i>
            <p className='text-sm font-[450] text-zinc-100 mb-3'>Help</p>
        </div>

        {/* user */}
        <div className='flex items-center gap-3 border-t-[1px] border-zinc-100'>
            <div className='bg-blue-400 overflow-hidden mt-3 rounded-full'>
            <img className='w-[30px]' src={assets.user_icon} alt="" />
            </div>
            <p className='text-sm font-[450] text-zinc-100'>Munis Abbas</p>
        </div>

        </div>
    </div>
  )
}

export default SideNav