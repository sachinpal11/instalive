import React, { useState } from 'react'

function Header({ name, img }) {

  const [ViewCount, setCount] = useState(100);
  return (
    <div className='w-full flex items-center justify-between mart-10 h-[10vh] text-white '>
      <div className='flex gap-3 items-center h-full'>
        <div className='marl-10 w-[35px] h-[35px] bg-gray-500 overflow-hidden flex items-center justify-center rounded-full'>
          <img src={img} alt="" className='w-full h-full object-cover' />
        </div>
        <span className='text-xl'> {name}</span>
      </div>
      <div className='w-[30%] flex gap-4'>
        <span className='bg-pink-600 button'>LIVE</span>
        <span>{ViewCount}</span>
      </div>
    </div>
  )
}

export default Header
