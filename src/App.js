import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className=''>
              <Link className="btn btn-primary" to="/" >Add a Post</Link>

          </div>
          <div>
            <h3>Posts</h3>
              <ul>

              </ul>
          </div>

      </div>
    );
  }
}

export default App;
