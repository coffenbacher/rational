import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

export class Instructions extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-8">
            <h1>Evidence can be overwhelming.</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <blockquote>
              <p>
                Well then who the fuck did it? Like why would... like why would... 
                it doesn’t make sense — why would k... — why would, if alleg...— 
                why would? Hae wouldn—why wouldn't?
              </p>
              <p>
                <strong>I’m probably just as confused as you are.</strong>
              </p>
              <small>Laura, in the popular podcast <cite><a href="http://serialpodcast.org/">Serial</a></cite></small>
            </blockquote>
          </div>
          <div className="col-lg-4">
            <a href="#" className="btn btn-success btn-lg">I'm ready to think through something »</a>
          </div>
        </div>
        <div className="row">
          <hr />
          <div className="col-lg-4">
            <h2>Deal with it</h2>
            <hr />
            <p><a href="#">Think Rationally</a> is a site designed to help you (and me) deal with overwhelming amounts of evidence and theories.</p>
            <p>Humans aren't good at evaluating evidence - this site is here to help form and share evidence-based opinions on topics like:</p>
            <div className="list-group">
              <a href="#" className="list-group-item">
                <strong>Serial Podcast</strong> 
                <br/><span className="text-primary">Did Adnan Syed kill Hae Min Lee?</span>
              </a>
              <a href="#" className="list-group-item">
                <strong>Deflategate</strong> 
                <br/><span className="text-primary">Did the Patriots intentionally cheat?</span>
              </a>
              <a href="#" className="list-group-item">
                <strong>Benghazi</strong> 
                <br/><span className="text-primary">Did Clinton know about the security situation in time to act?</span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <h2>How it works</h2>
            <hr />
            <p>
              <img src="http://3.bp.blogspot.com/-5Ibj71sYrfI/UW1Liyvq-VI/AAAAAAAABhk/G3C7OHnV5_U/s1600/Thomas_Bayes.gif"/>
            </p>
            <p><small>Rev. Thomas Bayes solved our problems</small></p>
            <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
            <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
            <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
          </div>
          <div className="col-lg-4">
            <h2>Share your opinion</h2>
            <hr />
            <p><a href="#">Think Rationally</a> atoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
            <p><small>This line of text is meant to be treated as fine print.</small></p>
            <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
            <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
            <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
          </div>
        </div>
      </div>
    );
  }
}