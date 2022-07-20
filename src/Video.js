import React, { useRef, useState } from "react";
import "./App.css";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoFooterSideBar from "./VideoFooterSideBar";

function Video({ url, channel, description, song, likes, shares, messages }) {
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
        src="https://v16-webapp.tiktok.com/998e158857c6a66f13b809247d5002c2/62d87b8a/video/tos/useast2a/tos-useast2a-ve-0068c004/1de85063017545faa9841bb65ef30e0e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=2988&bt=1494&btag=80000&cs=0&ds=2&ft=eXd.6HKSMyq8ZDNonwe2NwEfml7Gb&mime_type=video_mp4&qs=0&rc=ODgzOmg1NWgzZztnNTw1N0BpM240a2k6ZmY4OzMzNzczM0AzNWMuNV9eNTMxNGAwM2JhYSMyYV5tcjQwLWtgLS1kMTZzcw%3D%3D&l=202207201602320102452422050D2AD729"
      ></video>

      <VideoFooter
        channel={"@JoaoEspinheira"}
        description={"this is some description"}
        song={"i beliebe i can fly"}
      />

      <VideoFooterSideBar likes={111} shares={222} messages={333} />

      {/* <VideoFooter channel={channel} description={description} song={song} />

      <VideoFooterSideBar likes={likes} shares={shares} messages={messages} /> */}
    </div>
  );
}
export default Video;
