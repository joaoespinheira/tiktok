import React, { useRef, useState } from "react";
import "./App.css";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://v16-webapp.tiktok.com/61c807b2ca3e6b48f708a761c98753ca/62d5c0aa/video/tos/useast2a/tos-useast2a-pve-0068/a6481e9ce10d45cb8329ac9c9e40ae08/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2814&bt=1407&btag=80000&cs=0&ds=3&ft=eXd.6HKSMyq8Z6WbIwe2NHH6yl7Gb&mime_type=video_mp4&qs=0&rc=ZzRoZWQ5aTs5Z2VkZTw1NEBpM29lcjY6Zjp5ZDMzNzczM0A2YV81XjUwXmIxXi1fNS8tYSNvcmYxcjRfbmVgLS1kMTZzcw%3D%3D&l=20220718141959010192163032151E6473"
      ></video>

      <VideoFooter />

      {/*VideoSidebar*/}
    </div>
  );
}
export default Video;
