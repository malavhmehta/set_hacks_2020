import React from "react";
import {ContactForm} from "./contact_form";

export const Contact = () => (
    <React.Fragment>
      <div className="contact-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Contact us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-gradient">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
);
