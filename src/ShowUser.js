import React, {Component} from 'react';

class ShowUser extends Component {
  render() {
    let user = this.props.user;

    return(
      <div>
        <p>Id: {user.id} | Name: {user.name}</p>
        <button>Удалить</button>
      </div>
    )
  }
}

export default ShowUser;