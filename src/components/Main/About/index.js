import React from "react";
import {IconContext} from "react-icons";

import {Social} from "./social";
import {socials} from "../../../data";

export const About = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>
            What is SET.Hacks()?
          </h2>
          <p>
            A fully-online, people-focused, 24-hour hackathon that brings people
            together to solve the world’s biggest problems. With the COVID-19
            pandemic disrupting many internships, post-secondary studies, and
            many student-oriented STEM opportunities, our hackathon aims to give
            you the power to create even during a time of crisis.
          </p>
        </div>
        <IconContext.Provider value={{size: "1.75em", color: "#5243AA"}}>
          {
            socials.map((social) =>
                <Social
                  key={social.platform}
                  platform={social.platform}
                  description={social.description}
                  link={social.link} />
            )
          }
        </IconContext.Provider>
      </div>
    </div>
  </section>
)
