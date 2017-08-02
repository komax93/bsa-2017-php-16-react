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
        this.props.add(this.state.user);
        let user = {
            id: this.state.user.id + 1,
            name: ""
        }
        this.setState({user: user});
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.user.name} onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}>Добавить</button>
            </form>
        )
    }
}

export default AddUser;