import React, {Component} from 'react';
import UsersList from './UsersList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {id:1, name: "Maxym Kolesnykov"},
        {id:2, name: "Binary User"}
      ]
    }
  }

  render() {
    return (
      <UsersList
        users={this.state.users}
      />
    );
  }
}

export default App;