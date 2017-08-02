import React, {Component} from 'react';
import ShowUser from './ShowUser';
import AddUser from './AddUser';

class UsersList extends Component {
  render() {
    let users = this.props.users;

    return(
      <div className="container">
        <div className="col-md-6">
          <h1>Users List</h1>

          <AddUser add={this.props.add}/>

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
              {users.map(user => <ShowUser user={user} remove={this.props.remove}/>)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UsersList;