import React, { Component } from "react";
import uuid from "uuid";
import { Link } from "react-router-dom";
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
      return (
        <div className="row">
          <div className="col-md-6">
            <h2>
              {" "}
              <i className="fas fa-users" /> Clients
            </h2>
          </div>
          <div className="col-md-6">
            <table className="table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th> Name</th>

                  <th>Email</th>
                  <th>Balance</th>
                </tr>
              </thead>
              {client.map(client => (
                <tr key={uuid()}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>

                  <td>{client.email}</td>
                  <td>{client.balance}</td>
                  <td>
                    {" "}
                    <Link
                      to={`client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      );
    } else {
      return <h3>Loding....</h3>;
    }
  }
}
export default Client;
