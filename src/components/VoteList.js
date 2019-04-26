import React, { Component } from 'react';
import Vote from './Vote';
import axios from "axios";
class VoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Vote: []
    }
    this.onClickDelete = this.onClickDelete.bind(this);
  }
  componentDidMount() {
    axios.get("http://34.92.22.171:8000/api/members").then(res => {
      console.log(res.data);
      this.setState({ Vote: res.data })
    });
  }
  onClickDelete(e) {

    e.preventDefault();
    axios.delete("http://34.92.22.171:8000/api/members/", {
      id: this.lengthID,

    }).then(res => {
      this.setState({
        Vote: ''
      })
    });

  }
  render() {
    return (
      this.state.Vote.map(function (object, i) {
        return (
          <div className="card">
            <div className="card-content">
              <Vote obj={object} key={i} />

            </div>
          </div>
        );
      })
    )
  }
}
export default VoteList