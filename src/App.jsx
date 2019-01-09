import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App__card">
        <div className="App__title">My Minimal React Setup</div>
        <div className="App__code">
          <code>
            <p>
              git clone git@github.com:blazecolour/minimal-react-boilerplate.git
            </p>
            <p>cd minimal-react-boilerplate</p>
            <p>npm install</p>
            <p>npm start</p>
          </code>
        </div>
      </div>
    );
  }
}

export default App;
