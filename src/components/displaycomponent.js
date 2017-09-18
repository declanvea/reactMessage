import React from 'react';
import '../styles/App.css';

export default class DisplayComponent extends React.Component {
  render() {
    return (
      <div>
      <div>{this.props.sayWhat}</div>
      <div>[typed]</div>
      </div>
    );
  }
}
