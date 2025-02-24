import React, { useState } from 'react'
import Header from './components/Header'
import VideoBk from './components/VideoBk'

function App() {


  const [userName, setName] = useState("shankur_11");
  const [userImg, setImg] = useState("https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https://substack-post-media.s3.amazonaws.com/public/images/bec0d344-14a9-4a6a-9896-8d8b37508581_365x441.png");

  return (
    <div className='bg-neutral-900 w-screen h-screen overflow-hidden' >
      <Header name={userName} img={userImg} />
      {/* <VideoBk /> */}
    </div>
  )
}

export default App
