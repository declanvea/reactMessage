import React from 'react';
import '../styles/App.css';


export default class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input id="submit" type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}
