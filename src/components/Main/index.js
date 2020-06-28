import React from "react";

import {Hero} from "./Hero/";
import {About} from "./About/";
import {Challenges} from "./Challenges/";
import {Sponsors} from "./Sponsors";
import {FAQ} from "./FAQ";

const Divider = ({id}) => (
  <div className="container" id={id}>
    <hr/>
  </div>
);

export const Main = () => (
  <React.Fragment>
    <Hero/>
    <main id="main">
      <About/>
      <Divider id="challenges"/>
      <Challenges/>
      <Divider id="sponsors"/>
      <Sponsors/>
      <Divider id="faq"/>
      <FAQ/>
    </main>
  </React.Fragment>
);
