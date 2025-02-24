import React, { useEffect, useState } from 'react'
import { HeartData } from '../assets/heart'
import { motion } from "motion/react"

function Heart() {

  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        { id: Date.now(), img: HeartData[Math.floor(Math.random() * HeartData.length)] }
      ]);

      setTimeout(() => {
        setHearts((prev) => prev.slice(1)); // Remove first heart after animation
      }, 4000); // Duration of animation
    }, 500); // Delay between hearts

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-1/2 h-1/2 fixed bottom-0 right-0 z-[3] '>
      {hearts.map((heart) => (
        <motion.img
          key={heart.id}
          src={heart.img}
          className="absolute top-3/4 w-10 right-[10%] h-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -300 }}
          exit={{ opacity: 0, y: -300 }}
          transition={{ duration: 3 }}
        />
      ))}

    </div>
  )
}

export default Heart
