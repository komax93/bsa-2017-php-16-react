import React, {Component} from 'react';

class ShowUser extends Component {
  constructor(props) {
    super(props);
  }

  handleRemove(e) {
    this.props.remove(this.props.user);
  }

  render() {
    let user = this.props.user;

    return(
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td><button className="btn btn-danger" onClick={this.handleRemove.bind(this)}>Удалить</button></td>
      </tr>
    )
  }
}

export default ShowUser;