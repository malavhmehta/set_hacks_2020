import React from "react";

import { SponsorsList } from "./SponsorsList";
import OneP from "../../../images/sponsors/1password.png";
import Balsamiq from "../../../images/sponsors/balsamiq.png";
import BugSee from "../../../images/sponsors/bugsee.png";
import EchoAr from "../../../images/sponsors/echoar.png";
import Linode from  "../../../images/sponsors/linode.png";
import ReplIt from "../../../images/sponsors/replit.png";
import ToHacks from "../../../images/sponsors/tohacks.png";
import Wolfram from "../../../images/sponsors/wolframlanguage.png";


const allSponsors = [
  {
    label: "Gold",
    size: "col-6 col-md-4 col-lg-3",
    sponsors: [
      {
        name: "Wolfram Language",
        link: "https://www.wolfram.com/language/",
        image: Wolfram
      },
      {
        name: "EchoAr",
        link: "https://www.echoar.xyz/",
        image: EchoAr
      },
      {
        name: "1Password.com",
        link: "https://1password.com/",
        image: OneP
      },
      {
        name: "BugSee",
        link: "https://www.bugsee.com/",
        image: BugSee
      },
      {
        name: "Balsamiq",
        link: "https://balsamiq.com/",
        image: Balsamiq
      },
      {
        name: "Repl.It",
        link: "https://repl.it/",
        image: ReplIt
      }
    ]
  },
  {
    label: "Silver",
    size: "col-4 col-md-3 col-lg-2",
    sponsors: [
      {
        name: "Linode",
        link: "https://www.linode.com/",
        image: Linode
      },
      {
        name: "ToHacks 2020",
        link: "https://www.tohacks.ca/",
        image: ToHacks
      }
    ]
  }
]


export const Sponsors = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2>
          Sponsors
        </h2>
      </div>
    </div>
    {allSponsors.map((sponsor) => (
        <SponsorsList key={sponsor.label} label={sponsor.label} size={sponsor.size} sponsors={sponsor.sponsors} />
    ))}
    <div className="row">
      <div className="col-12">
        <h3>Interested in sponsoring?</h3>
        <p>Send us an email at <a href="mailto:set.national@gmail.com" className="inline-link">set.national@gmail.com</a>.</p>
        <a href="./SET_Hacks_Sponsorship.pdf" className="button">
          Download Sponsorship Package
        </a>
      </div>
    </div>
  </div>
)
