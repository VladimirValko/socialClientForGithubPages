import React from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

const Home: React.FC = () => {
  return (
    <>
      {/* <Topbar /> */}
      {/* <div className="homeContainer"> */}
      {/* <Leftbar /> */}
      <Feed />
      <Rightbar />
      {/* </div> */}
    </>
  );
};

export default Home;
