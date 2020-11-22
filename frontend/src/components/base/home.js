import React from "react";
import shin from "../../img/shin.gif";
import Shinchan from "../../img/Shinchan.gif";

function Home() {
  return (
    <React.Fragment>
      <br />
      <div className="container">
        <h1>高雄 Zoe 手工香皂</h1>

        <img src={shin} top="0" height="200px"></img>
        <img src={Shinchan} height="200px"></img>
        <br />
        <br />
        <br />
      </div>
    </React.Fragment>
  );
}

export default Home;
