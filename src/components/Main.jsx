import React, { useContext } from 'react'
import { Context } from '../context/Context'
import {assets} from '../../src/assets/assets'



const Main = () => {

    const {onSet,recentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context)
  return (
    <div className='w-[85%] m-3 mr-0 rounded-l-2xl backdrop-blur-xl  border-[1.4px] border-r-0 border-white/15'>

       <div className='max-w-[900px] m-auto flex flex-col gap-40'>
        
        {!showResult 
            ? <>
            <div className=''>
        {/* greet */}
        <div className='greet mt-[34px] flex flex-col items-center'>
            <img className='w-[60px] mb-2' src="/public/MD..png" alt="" />
            <p className='text-center text-white  text-[24px] font-medium mb-1'>Experience seamless chatbot interaction with ChatMate</p>
            <p className=' text-center text-zinc-400 text-sm'>Explore Deeper Insights, Engage in Meaningful Discussions. <br />
            and Unlock New Possibilities with ChatMate</p>
        </div>

        {/* cards */}
        <div className='cards flex justify-center items-center mr-12  gap-5 mt-40'>
        <div className='w-[18%] h-24  border-[1.2px] p-2 bg-[#353a63]/30 hover:bg-[#353a63]/5 border-white/15 hover:cursor-pointer rounded-xl'>
        <i className="ri-disc-line text-[22px]  text-yellow-400"></i>
        <p className='text-sm text-white/80'>List the diverse music genres worldwide.</p>
        </div>

        <div className='w-[18%] h-24  border-[1.2px] p-2 bg-[#353a63]/30 hover:bg-[#353a63]/5 border-white/15 hover:cursor-pointer rounded-xl'>
        <i className="ri-book-2-line text-[20px]  text-purple-400"></i>
        <p className='text-sm text-white/80 mt-[2%] '>Any great book recommendation.</p>
        </div>

        <div className='w-[18%] h-24  border-[1.2px] p-2 bg-[#353a63]/30 hover:bg-[#353a63]/5 border-white/15 hover:cursor-pointer rounded-xl'>
        <i className="ri-lightbulb-line text-[20px]  text-blue-300"></i>
        <p className='text-sm text-white/80 mt-[2%] '>write a story in my favorite genre</p>
        </div>

        <div className='w-[18%] h-24  border-[1.2px] p-2 bg-[#353a63]/30 hover:bg-[#353a63]/5 border-white/15 hover:cursor-pointer rounded-xl'>
        <i className="ri-shopping-bag-2-line text-[20px] text-pink-300"></i>
        <p className='text-sm text-white/80 mt-[2%] '>Pick an outfit for my blind date.</p>
        </div>


        </div>
        </div>
            </> 

            :
            <div id='result' className='result max-h-[400px] w-[100%] max-w-[900px] py-11 overflow-y-scroll'>
                <div className='result  title flex items-center gap-3 pb-5'>
                    <img className='w-[35px] rounded-full' src={assets.user_icon} alt="" />
                    <p className='text-white/80 text-sm'>{recentPrompt}</p>
                </div>
                <div className='resultData pl-11'>
                    {loading ? <>
                        <div className='flex flex-col gap-2 animate-pulse '>
                              <div className='h-2 bg-[#353a63]/50 rounded'></div>
                              <div className='h-2 bg-[#353a63]/50 rounded'></div>
                              <div className='h-2 bg-[#353a63]/50 rounded'></div>
                        </div>
                        
                    </>
                     : <p className='text-[15px] text-zinc-400 font-[300] leading-[1.8]' dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>
        }

        

        <div className='absolute flex items-center text-white/80 gap-3 bottom-11 w-[100%] max-w-[900px]'>     
        <input 
        onChange={(e)=> setInput(e.target.value)} 
        value={input}
         className='outline-none pl-5 bg-[#353a63]/50  w-[99%] p-2 text-white/80 rounded-md' type="text" 
         placeholder='Hnji phuchiye?'
         />
        <i onClick={()=>onSet()} className=" flex items-center ri-send-plane-2-line hover:bg-[#353a63]/70 py-2 px-3 bg-[#353a63]/50 rounded-md   text-white/80 "></i>
        
        </div>
        
        </div>
    </div>
  )
}

export default Main


{/* <span className='text-transparent text-[45px]'>Hello, Dev.</span> */}