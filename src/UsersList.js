import React, {Component} from 'react';
import ShowUser from './ShowUser';
import AddUser from './AddUser';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  addUser(user) {
    let users = this.state.users;
    users.push(user);
    this.setState({users: users});
  }

  removeUser(user) {
    let users = this.state.users;
    this.setState({
      users: users.filter(userItem => userItem.id !== user.id)
    });
  }

  render() {
    let users = this.state.users;

    return(
      <div className="container">
        <div className="col-md-6">
          <h1>Users List</h1>

          <AddUser add={this.addUser.bind(this)}/>

          <hr/>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => <ShowUser user={user} remove={this.removeUser.bind(this)}/>)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UsersList;