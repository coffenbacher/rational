import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Think Rationally</a>
          </div>
      
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Instructions<span className="sr-only">(current)</span></a></li>
              <li><a href="#">Analyze</a></li>
              {/*
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
              </li>
              */}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}