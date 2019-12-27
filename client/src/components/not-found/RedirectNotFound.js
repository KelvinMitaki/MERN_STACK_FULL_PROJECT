import React, { Component } from "react";

export class RedirectNotFound extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="display-4">Page Not Found</h1>
          <p>Sorry this page does not exist</p>
        </div>
      </div>
    );
  }
}

export default RedirectNotFound;
