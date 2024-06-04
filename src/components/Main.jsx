import React, { useContext } from 'react'
import { Context } from '../context/Context'
import {assets} from '../../src/assets/assets'



const Main = () => {

    const {onSet,recentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context)
  return (
    <div className='w-[85%] m-3 rounded-2xl bg-white'>

       <div className='max-w-[900px] m-auto flex flex-col gap-40'>
        
        {!showResult 
            ? <>
            <div className=''>
        {/* greet */}
        <div className='greet mt-[34px] text-[45px] font-[500] text-zinc-900/70'>
            <p><span className='text-transparent'>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
        </div>

        {/* cards */}
        <div className='cards flex items-center gap-5 mt-32'>
        <div className='w-52 h-32  border-[1.4px] border-transparent  p-2 bg-zinc-200/50 rounded-xl'>
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
        </div>
            </> 

            :
            <div id='result' className='result max-h-[400px] py-11 px-[5%] overflow-y-scroll'>
                <div className='result title flex items-center gap-3 pb-5'>
                    <img className='w-[35px] rounded-full' src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className='resultData pl-11'>
                    {loading ? <>
                        <div className='flex flex-col gap-2 '>
                              <div className='w-[100%] max-w-[900px] h-4 bg-gradient-to-tr from-[#ff4066] to-[#fff16a] rounded-sm'></div>
                              <div className='w-[75%] max-w-[900px] h-4 bg-gradient-to-tr from-[#ff4066] to-[#fff16a] rounded-sm'></div>
                              <div className='w-[50%] max-w-[900px] h-4 bg-gradient-to-tr from-[#ff4066] to-[#fff16a] rounded-sm'></div>
                        </div>
                        
                    </>
                     : <p className='text-[17px] font-[300] leading-[1.8]' dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>
        }

        

        <div className='absolute bottom-11 w-[100%] max-w-[900px] '>    
        <div className='flex items-center gap-3'>
        <input onChange={(e)=> setInput(e.target.value)} value={input} className='outline-none pl-5 bg-zinc-200/65  w-[99%] p-2 text-zinc-600/70 rounded-full' type="text" placeholder='Hnji phuchiye?' />
        <i onClick={()=>onSet()} className="ri-send-plane-2-line  text-white py-2 px-3 bg-[#ff4066] rounded-full"></i>
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default Main