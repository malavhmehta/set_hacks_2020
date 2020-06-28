import React from "react";

export const SponsorsList = ({label, sponsors, size}) => (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <h3 className="sub-heading">
            {label}
          </h3>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        {sponsors.map((sponsor) => (
          <div className={size} key={sponsor.name}>
            <a href={sponsor.link} className="image-wrapper">
              <img className="img-fluid" src={sponsor.image} alt={sponsor.name} />
            </a>
          </div>
        ))}
      </div>
    </React.Fragment>
);
