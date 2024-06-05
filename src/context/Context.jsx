import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext()

const ContextProvider = (props) => {
    // save the input data
    const [input, setInput] = useState('')  

    // we'll display the save input data in the recent prompt
    const [recentPrompt, setRecentPrompt] = useState('') 

    // // we'll use it to store all the input history in recent tab in side nav and we're using 
    // array because we have multiple elements
    const [prevPrompt, setPrevPrompt] = useState([]) 

    // to hide and show the main screen with answer whenever it is true it will be hide n vice versa
    const [showResult, setShowResult] = useState(false)

    // we'll show the loader when it is taking time to load the data
    const [loading, setLoading] = useState(false)

    // we'll use to display the result data
    const [resultData, setResultData] = useState('')


    const tyingEffect = (index,nextWord) => {
        setTimeout(()=>{
            setResultData(prev => prev+nextWord)
        },75*index)
    }
    

    const onSet = async (prompt) => {
        setResultData('')
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt !== undefined){
            response = await run(prompt)
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompt(prev =>[...prev, input])
            setRecentPrompt(input)
            response = await run(input)

        }
        setRecentPrompt(input)
        
        const responseArray = response.split("**")
        let newResponse = " ";
        for(let i = 0 ; i < responseArray.length ; i++) {
            if(i === 0 || i%2 !== 1){
                newResponse += responseArray[i]
            }
            else{
                newResponse += "<b style='color: white;'>" + responseArray[i] + "</b>";
            }
        }

        let newResponse2 = newResponse.split("*").join("<br/>")
        // setResultData(newResponse2)
        let newResponseArray = newResponse2.split(" ")
        for(let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i]
            tyingEffect(i,nextWord+" ")
        }
        setLoading(false)
        setInput('')
    }

    const contextValue =  {
        prevPrompt,
        setPrevPrompt,
        onSet,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider