import React, { Component } from 'react';
import axios from "axios";
var BtnStyle = {
  float: "right",
  marginRight: 2
}
class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Vote: []
    }
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickDelete(e) {
    e.preventDefault();
    axios.delete("http://34.92.22.171:8000/api/members/" + this.props.obj.memberID, {
    }).then(res => {
      this.setState({
        Vote: ''
      })
    });
  }

  render() {
    return (
      <div>
        {this.props.obj.memberName}

        <a style={BtnStyle}
          className="button is-danger"
          onClick={this.onClickDelete}>
          ลบ
        </a>
  

      </div>
    )
  }
}
export default Vote