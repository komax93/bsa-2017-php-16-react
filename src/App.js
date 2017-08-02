import React, {Component} from 'react';
import UsersList from './UsersList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UsersList/>
    );
  }
}

export default App;