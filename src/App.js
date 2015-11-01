import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import { Header } from './header';
import { Footer } from './footer';
import { Instructions } from './instructions';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Instructions />
        </div>
        <Footer />
      </div>
    );
  }
}