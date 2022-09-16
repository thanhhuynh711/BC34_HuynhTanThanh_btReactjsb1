import React, { Component } from "react";
import Banner from "./banner";
import Item from "./item";

export class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="container px-lg-5">
          <Banner />
          <div className="pt-4">
            <Item />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
