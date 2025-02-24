import React, { useRef } from 'react'
import { RiTelegram2Line } from 'react-icons/ri'
import { TbVideoPlus } from 'react-icons/tb'

function Comment({ setname }) {
  const nameRef = useRef();
  const handleName = () => {
    console.log("hello")
    setname(nameRef.current.value);
    nameRef.current.value = "";
  }
  return (
    <div className='w-full items-center flex justify-start gap-1 fixed z-[3] bottom-0 h-auto marb-10'>
      <input type="text" ref={nameRef} placeholder='Add a comment...' className='text-xl text-white w-[80%] placeholder:text-white marl-10 border-[2px] input rounded-xl' />
      <button onClick={handleName} className='text-5xl marl-10 text-white'><RiTelegram2Line /></button>
      {/* <button className='text-4xl marl-10 text-white'><TbVideoPlus /></button> */}
    </div>
  )
}

export default Comment
