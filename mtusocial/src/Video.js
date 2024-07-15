import React from 'react'
import "./video.css"

function video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    // if video is playing
    // stop it ...
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    }else{
      videoRef.current.play();
      setPlaying(true);
    }

    // otherwise if it is not playing
    // play it...
  };
  
  return (
    <div className="video">
      <video ref={videoRef} loop autoPlay></video>
        <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        scr="">https://artlist.io/stock-footage/clip/girl-village-kids-dancing-friends/580465</video>
        {/* VideoFooter */}
        {/* VideoSidebar */}        
      
    </div>
  )
}

export default video
