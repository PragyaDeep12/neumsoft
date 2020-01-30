import React, { Component } from "react";
import Search from "../Assets/home_search.svg";
export default class HomePageHeader extends Component {
  render() {
    return (
      <div className="home-header">
        <div className="row">
          <div className="col-md-2">
            <div className="my-location-tilte">Home</div>
            <div className="my-location">Bangalore, KA</div>
            </div>
            <div className="col-md-10">
              <div className="input-group md-form form-sm form-2 pl-0">
                <input
                  className="form-control my-0 py-1 lime-border"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text background-transparent"
                    id="basic-text1"
                  >
                    <img src={Search} alt="search" />
                  </span>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    );
  }
}
