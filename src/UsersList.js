import React, {Component} from 'react';
import ShowUser from './ShowUser';
import AddUser from './AddUser';
import FilterUser from './FilterUser';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteUser } from './actions';

class UsersList extends Component {
  render() {
    let users = this.props.reduceState;

    return(
      <div className="container">
        <div className="col-md-6">
          <h1>Users List</h1>

          <FilterUser/>
          <AddUser/>

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
              {users.map(user => (!user.hidden) ? <ShowUser key={user.id} user={user} handleRemove={() => this.props.deleteUser(user.id) }/> : "")}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reduceState: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteUser }, dispatch);
}

const UsersListConnected = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListConnected;