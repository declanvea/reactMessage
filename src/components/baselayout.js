import React from 'react';
import '../styles/App.css';
import Header from './header';
import Footer from './footer';


export default class BaseLayout extends React.Component {
  render() {
    return (
      <div>
      <Header/>
      <div>This should house Header and Footer components and be able to house any children components.</div>
      <Footer/>
      </div>
    );
  }
}
