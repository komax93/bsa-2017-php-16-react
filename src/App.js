import React, {Component} from 'react';
import UsersList from './UsersList';

class App extends Component {
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

  render() {
    return (
      <UsersList
        users={this.state.users}
        add={this.addUser.bind(this)}
      />
    );
  }
}

export default App;