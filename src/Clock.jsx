import React, { useEffect, useState } from 'react'

function Clock() {

    const [time, setTime] = useState(new Date());

    // BASIC APPROACH 
    // const timeNow=()=> {
    //     setTime(new Date())
    // }
    // setTimeout(timeNow,1000)

    // USING useEffect()

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=> {
            clearInterval(intervalID);
        }

    },[])


    function formatTime(){
    let hrs = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    
    const ampm =  hrs >= 12 ? 'PM' : 'AM'
    
    hrs = hrs%12 || 12;

    return`${padZero(hrs)}:${padZero(min)}:${padZero(sec)} ${ampm}`

    }
    

    const padZero = (number) =>{
        // if(number<10){
        //     return`0${number}`;
        // }
        // else
        //     return number;

        return (number<10 ? "0" : "") + number ;
    }

  return (
    <div className='backdrop-blur-sm  h-screen w-full flex items-center justify-center'>
    <h1 className='text-8xl text-green-100 font-bold font-mono rounded-3xl bg-stone-900 bg-opacity-30 border-4 border-green-100 border-opacity-35 px-8 py-4 '>{formatTime()}</h1>
    </div>
  )
}
 
export default Clock