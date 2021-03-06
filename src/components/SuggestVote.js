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
    axios.get("https://us-central1-dcw-my-assignment.cloudfunctions.net/api/api/members").then(res => {
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
      axios.post("https://us-central1-dcw-my-assignment.cloudfunctions.net/api/api/members", {
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
          placeholder="เเนะนำเมนูอาหารที่น่าสนใจ"
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