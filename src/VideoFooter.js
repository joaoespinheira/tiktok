import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
// import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon"></MusicNoteIcon>
          <div className="videoFooter__ticker__text">{song}</div>
          {/* <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>i beliebe i can fly</p>
              </>
            )}
          </Ticker> */}
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://pngimg.com/uploads/vinyl/vinyl_PNG5.png"
        alt=""
      ></img>
    </div>
  );
}

export default VideoFooter;
