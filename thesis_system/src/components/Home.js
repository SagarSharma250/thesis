import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import tulogo from "./styles/tu_logo.png";
import "./styles/Home.css"
const Body = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="contents row">
          <div className="col-sm-6 banner-info">
            <h1>Institute of Engineering, TU</h1>
            <p className="big-text">MSC Thesis Evaluation System</p>
            <button
              className="btn btn-first"
              type="button"
              data-bs-target="#login-button"
              data-bs-toggle="modal"
            >
              LOGIN
            </button>
          </div>
          <div className="col-sm-6 banner-image">
            <img
              alt="tu-logo"
              className="img-responsive tu_logo"
              src={tulogo}
            />
          </div>
        </div>
      </div>
      <footer>
        <div className="bg-dark container-fluid text-light" id="wrapper">
          <p className="mb-0 p-3 text-center">
            © Copyright 2022 Pulchowk Thesis Evaluation System
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Body;
