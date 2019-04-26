import React, { Component } from 'react';
import axios from "axios";
class SuggestVote extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      Vote: '',
      lengthID: ''
    };
  }
  componentDidMount() {
    axios.get("http://34.92.22.171:8000/api/members").then(res => {
      this.lengthID = res.data.length
    });
  }
  onChange(e) {
    this.setState({
      Vote: e.target.value
    });
  }
  onKeyup(e) {
    if (e.keyCode === 13&&(e.target.value) !== '') {
      e.preventDefault();
      axios.post("http://34.92.22.171:8000/api/members", {
        id: this.lengthID,
        name: e.target.value
      }).then(res => {
        this.setState({
          Vote: ''
        })
      });
    }
  }
  render() {
    return (
      <form>
        <textarea
          className="textarea"
          placeholder="เสนอเมนู"
          cols="50"
          onChange={this.onChange}
          onKeyUp={this.onKeyup}
          value={this.state.Vote}>
        </textarea>
      </form>
    )
  }
}
export default SuggestVote