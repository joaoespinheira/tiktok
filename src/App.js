import "./App.css";
import React from "react";
import Video from "./Video";

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const param = Object.freeze({
    url: "https://v16-webapp.tiktok.com/998e158857c6a66f13b809247d5002c2/62d87b8a/video/tos/useast2a/tos-useast2a-ve-0068c004/1de85063017545faa9841bb65ef30e0e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=2988&bt=1494&btag=80000&cs=0&ds=2&ft=eXd.6HKSMyq8ZDNonwe2NwEfml7Gb&mime_type=video_mp4&qs=0&rc=ODgzOmg1NWgzZztnNTw1N0BpM240a2k6ZmY4OzMzNzczM0AzNWMuNV9eNTMxNGAwM2JhYSMyYV5tcjQwLWtgLS1kMTZzcw%3D%3D&l=202207201602320102452422050D2AD729",
    channel: "@JoaoEspinheira",
    song: "I beliebe i can fly",
    description: "this some description",
    likes: 111,
    messages: 222,
    shares: 333,
  });
  return (
    //Ben convension
    <div className="app">
      <div className="app__video">
        <div>{`Window width = ${width}`}</div>
        <div>{`Window height = ${height}`}</div>

        <Video
          url={param.url}
          channel={param.channel}
          song={param.song}
          description={param.description}
          likes={param.likes}
          messages={param.messages}
          shares={param.shares}
        />
        <Video />
      </div>

      {/* app container */}
      {/*videos*/}
      {/*video*/}
      {/*video*/}
      {/*video*/}
    </div>
  );
}

export default App;
