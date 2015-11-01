import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
        <footer className="container">
          <div className="row">
            <div className="col-lg-12">
              <hr />
              <p>Made by <a href="#" rel="nofollow">Charles Offenbacher</a>. Contact him at <a href="mailto:charles.offenbacher@gmail.com">charles.offenbacher@gmail.com</a>.</p>
            </div>
          </div>
        </footer>
    );
  }
}