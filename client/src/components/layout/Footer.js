import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-dark text-white mt-5 p-4 text-center fixed-bottom">
          Copyright &copy; {new Date().getFullYear()} GeekHub
        </footer>
      </div>
    );
  }
}

export default Footer;
