import React from 'react';
import '../styles/App.css';
import BaseLayout from './baselayout';
import ParentComponent from './parentcomponent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>

        </BaseLayout>
      </div>
    );
  }
}

export default App;
