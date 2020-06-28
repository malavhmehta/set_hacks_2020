import React from "react";

import {Countdown} from "./countdown";
import {date} from "../../../data";

export const Hero = () => (
  <React.Fragment>
    <div id="hero" className="jumbotron jumbotron-fluid">
      <div className="container hero">
        <h1 className="display-4">
          SET.Hacks() is a <span>fully-online</span>, <span>people-focused</span>,
          24-hour <span>hackathon</span> that brings people together to solve the
          <span> world's biggest problems.</span>
        </h1>
      </div>
    </div>
    <div className="container countdown-container" id="about">
      <Countdown target={date}/>
    </div>
  </React.Fragment>
);
