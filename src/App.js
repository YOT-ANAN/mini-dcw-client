import React, { Component } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import VoteList from '../src/components/VoteList';
import SuggestVote from '../src/components/SuggestVote';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="วันนี้กินอะไรดี?" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <VoteList title="เเสดงรายการเมนู" />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <SuggestVote />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <Footer name="ยศอนันต์ เตี้ยวสกุล" id="5910110270" />
          </div>
        </div>
      </div >
    );
  }
}

export default App;
