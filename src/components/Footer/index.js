import React from 'react';
import {useLocation} from "react-router-dom";

export const Footer = () => {
  let location = useLocation();

  return (
    <footer className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <p className={"footer-content" + (location.pathname !== "/" ? " alt" : "")}>
          SET.Hacks() &copy; 2020
            </p>
        </div>
      </div>
    </footer>
  );
}
