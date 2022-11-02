import React from "react";
import Music from "../../components/music/Music";
import MusicRightBar from "../../components/music/MusicRightBar";
import "./musicPage.css";

const VideosPage: React.FC = () => {
  return (
    <>
      <div className="musicPage">
        <Music />
        <MusicRightBar />
      </div>
    </>
  );
};

export default VideosPage;
