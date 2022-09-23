import React, { Component } from "react";
import Item from "./Item";

export default class Banner extends Component {
  render() {
    return (
      <div className="container p-5 mt-5 mb-10 bg-light text-center">
        <h1 className="fw-bold">A Warm Welcome!</h1>
        <p className="text-black fw-regular fs-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          placeat architecto magnam dicta tempore! Culpa, assumenda. Consequatur
          enim alias adipisci sint iusto! Necessitatibus omnis voluptatum
          perferendis quaerat quidem. Autem, necessitatibus?
        </p>
        <button className="btn btn-primary">Call to Action</button>
      </div>
    );
  }
}
