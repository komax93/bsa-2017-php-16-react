import React, {Component} from 'react';
import ShowUser from './ShowUser';

class UsersList extends Component {
  render() {
    let users = this.props.users;

    return(
      <div>
        {users.map(user => <ShowUser user={user}/>)}
      </div>
    );
  }
}

export default UsersList;