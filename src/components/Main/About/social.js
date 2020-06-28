import React from "react";
import {FaFacebookF, FaInstagram} from "react-icons/all";

const FaDevpost = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 64 64" width="32">
      <path d="m48.7 4.8h-33.4l-15.3 27.2 15.7 27.2h33.1l15.2-27.2z" fill="#5243AA"/>
      <path d="m32.2 16.9h-10.8v30.3h10.8c8.2 0 14.9-6.8 14.9-15.1s-6.6-15.2-14.9-15.2zm-.2 24.2h-4.5v-18.2h4.5c5 0 9.1 4.1 9.1 9.1s-4.1 9.1-9.1 9.1z" fill="#fff"/>
    </svg>
)

export const Social = ({platform, description, link}) => {
  let Icon;

  switch(platform) {
    case "Facebook":
      Icon = FaFacebookF;
      break;

    case "Instagram":
      Icon = FaInstagram;
      break;

    case "Devpost":
      Icon = FaDevpost;
      break;

    default:
      Icon = FaFacebookF;
      break;
  }

  return (
    <div className="col-12 col-sm-6 col-md-4">
      <a className="social-container" href={link}>
        <div className="social">
          <div className="icon">
            <Icon/>
          </div>
          <div className="label">
            <p className="platform">{platform}</p>
            <p className="description">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
