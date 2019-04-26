import React, {Component} from 'react';
class Footer extends Component {
  render(){
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item">
           จัดทำโดย {this.props.name} รหัสนักศึกษา {this.props.id}
          </a>
        </div>
      </nav>
    )
  }
}
export default Footer