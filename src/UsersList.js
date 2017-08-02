import React, {Component} from 'react';
import ShowUser from './ShowUser';
import AddUser from './AddUser';

class UsersList extends Component {
  render() {
    let users = this.props.users;

    return(
      <div className="list">
        <AddUser add={this.props.add}/>
        {users.map(user => <ShowUser user={user} remove={this.props.remove}/>)}
      </div>
    );
  }
}

export default UsersList;