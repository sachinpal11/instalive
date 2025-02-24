import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { LuDot } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { VscEye } from 'react-icons/vsc';

function Header({ name, img, state, setstate }) {

  const [ViewCount, setCount] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChange = Math.floor(Math.random() * 1) + 1;
      const shouldIncrease = Math.random() > 0.5;

      setCount(prev => prev + (shouldIncrease ? randomChange : -randomChange));
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='z-[3]  fixed bg-transparent w-full flex items-center justify-between mart-10 h-[7vh] text-white '>
      <div className='flex gap-3 items-center h-full'>
        <div className='marl-10 w-[38px] h-[38px] bg-gray-700 overflow-hidden flex items-center justify-center rounded-full'>
          <img onClick={() => setstate(false)} src={img} alt="" className='w-full h-full object-cover' />
        </div>
        <span onClick={() => setstate(true)} className='text-lg flex items-center gap-1'>{name}<IoIosArrowDown /> </span>
      </div>
      <div className='w-[45%] justify-center items-center flex gap-2'>
        <span className='bg-pink-600 text-md button flex items-center gap-1'>LIVE</span>
        <span className='button text-md flex gap-1 items-center bg-gray-600'><VscEye />{ViewCount}K</span>
        <RxCross2 className='text-4xl marr-10' />
      </div>
    </div>
  )
}

export default Header
