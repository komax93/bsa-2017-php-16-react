import React, {Component} from 'react';

class ShowUser extends Component {
  handleRemove(e) {
    this.props.remove(this.props.user);
  }

  render() {
    let user = this.props.user;

    return(
      <div>
        <p>Id: {user.id} | Name: {user.name}</p>
        <button onClick={this.handleRemove.bind(this)}>Удалить</button>
      </div>
    )
  }
}

export default ShowUser;