import { useRef, useEffect } from "react";

const VideoBk = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Access Camera
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => console.error("Camera access denied:", err));
  }, []);

  return (
    <div className="flex justify-center w-full items-center h-full fixed z-[-1]">
      <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover rounded-lg shadow-lg" />
    </div>
  );
};

export default VideoBk;
