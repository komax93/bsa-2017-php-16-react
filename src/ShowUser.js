import React, {Component} from 'react';

class ShowUser extends Component {
  render() {
    let { user, handleRemove } = this.props;

    return(
      <tr>
        <th scope="row">{ user.id }</th>
        <td>{ user.name }</td>
        <td><button className="btn btn-danger" onClick={ handleRemove }>Удалить</button></td>
      </tr>
    )
  }
}

export default ShowUser;