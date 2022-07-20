import React, { useState } from "react";
import "./VideoFooterSideBar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function VideoFooterSideBar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoFooterSideBar">
      <div className="videoFooterSideBar__button">
        {liked ? (
          <FavoriteIcon
            fontSize="large"
            onClick={(e) => {
              setLiked(false);
              console.log(e);
            }}
          />
        ) : (
          <FavoriteBorderIcon //hook
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoFooterSideBar__button">
        <MessageIcon fontSize="large" />
        <p>{shares}</p>
      </div>
      <div className="videoFooterSideBar__button">
        <ShareIcon fontSize="large" />
        <p>{messages}</p>
      </div>
    </div>
  );
}

export default VideoFooterSideBar;
