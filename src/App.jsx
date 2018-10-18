import React from 'react';
import './App.css';

const divStyle = {
  color: 'blue',
  fontSize: '24px'
};

class Card extends React.Component {
  render() {
    return <div style={divStyle}>My Minimal React Setup</div>;
  }
}

export default Card;
