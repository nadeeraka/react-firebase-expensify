import React, { Component } from "react";

class Client extends Component {
  render() {
    const client = [
      {
        firstName: "javier",
        lastName: "njk",
        email: "email",
        phone: "gjun",
        balance: "78"
      }
    ];
    if (client) {
      return <h1>Clients</h1>;
    } else {
      return <h3>Loding....</h3>;
    }
  }
}
export default Client;
