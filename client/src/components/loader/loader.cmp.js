import React from 'react';

class Loader extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
          <div className="progress">
            <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: 40 + '%'}}>
            </div>
          </div>
        );
    }

}

export default Loader;
