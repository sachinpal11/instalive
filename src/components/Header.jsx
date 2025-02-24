import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

function Header({ name, img }) {

  const [ViewCount, setCount] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChange = Math.floor(Math.random() * 4) + 1;
      const shouldIncrease = Math.random() > 0.5;

      setCount(prev => prev + (shouldIncrease ? randomChange : -randomChange));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='z-[3]  fixed bg-transparent w-full flex items-center justify-between mart-10 h-[10vh] text-white '>
      <div className='flex gap-3 items-center h-full'>
        <div className='marl-10 w-[35px] h-[35px] bg-gray-500 overflow-hidden flex items-center justify-center rounded-full'>
          <img src={img} alt="" className='w-full h-full object-cover' />
        </div>
        <span className='text-xl flex items-center gap-1'> {name}<IoIosArrowDown /> </span>
      </div>
      <div className='w-[35%] justify-center flex gap-2'>
        <span className='bg-pink-600 button'>LIVE</span>
        <span className='button bg-gray-600'>{ViewCount}</span>
      </div>
    </div>
  )
}

export default Header
