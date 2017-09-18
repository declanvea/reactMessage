import React from 'react';
import '../styles/App.css';
import Header from './header';
import Footer from './footer';


export default class BaseLayout extends React.Component {
  render() {
    return (
      <div>
      <Header/>
      {this.props.children}
      <Footer/>
      </div>
    );
  }
}
