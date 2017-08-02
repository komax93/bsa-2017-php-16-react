import React, {Component} from "react";

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: 1,
                name: ""
            }
        }
    }

    handleChange(e) {
        let userObject = this.state.user;
        userObject.name = e.target.value;
        this.setState({user: this.state.user})
    }

    handleClick(e) {
        e.preventDefault();

        if(this.state.user.name === '') {
          alert('Please write user name!');
        }
        else {
          this.props.add(this.state.user);

          this.setState({user: {
              id: this.state.user.id +1,
              name: ""
          }});
        }
    }

    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-md-9">
                        <input type="text" className="form-control" value={this.state.user.name} onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-success" onClick={this.handleClick.bind(this)}>Добавить</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddUser;