import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-4 mb-5 bg-light text-center  " >
          <h5 className="fw-bold">Fresh new layout</h5>
          <p>With Bottstrap 5, we've created a fresh new layout for thí template</p>
        </div>
        <div className="col-4 mb-5 bg-light text-center  " >
          <h5 className="fw-bold">Free to download</h5>
          <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
        </div>
        <div className="col-4 mb-5 bg-light text-center  " >
          <h5 className="fw-bold">Jumbotron hero header</h5>
          <p>The heroic part of this template is the jumbotron hero header!</p>
        </div>
        <div className="col-4 mb-5 bg-light text-center  " >
          <h5 className="fw-bold">Feature boxes</h5>
          <p>We've created some custom feature boxes using Bootstrap icons!</p>
        </div>
        <div className="col-4 mb-5 bg-light text-center  " >
          <h5 className="fw-bold">Simple clean code</h5>
          <p>We keep our dependencies up to date and squash bugs as they come!</p>
        </div>
        <div className="col-4 mb-5 bg-light text-center  " >
          <h5 className="fw-bold">A name you trust</h5>
          <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
        </div>
        </div>
       
      </div>
    );
  }
}
