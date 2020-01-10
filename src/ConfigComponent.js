import React, { Component } from "react";
class ConfigComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-header">Select Favourite Currencies</div>
            <ul className="list-group list-group-flush" style={{ columns: "2 auto" }}>
              <li className="list-group-item">American Dollar</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ConfigComponent;
