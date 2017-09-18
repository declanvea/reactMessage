import React from 'react';
import '../styles/App.css';
import Header from './header';
import Footer from './footer';
import ParentComponent from './parentcomponent';


export default class BaseLayout extends React.Component {
  render() {
    return (
      <div>
      <Header/>
      <div><ParentComponent/></div>
      <Footer/>
      </div>
    );
  }
}
