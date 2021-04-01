// src/GetRequestSetHeaders.js

import React from 'react';

class GetRequestSetHeaders extends React.Component {

    render() {
        const { totalReactPackages } = this.state;
        return (
          <div className="card text-center m-3">
            <h5 className="card-header">GET Request with Set Headers</h5>
            <div className="card-body">Total packages: {totalReactPackages}</div>
          </div>
        );
      }
}
export default GetRequestSetHeaders;