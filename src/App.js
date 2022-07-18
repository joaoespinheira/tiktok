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
  return (
    //Ben convension
    <div className="app">
      <div className="app__video">
        <div>{`Window width = ${width}`}</div>
        <div>{`Window height = ${height}`}</div>
        <Video />
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
