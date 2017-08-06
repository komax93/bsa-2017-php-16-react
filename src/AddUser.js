import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from './actions';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        if(this.input.value === '') {
          alert('Please write user name!');
        }
        else {
          this.props.addUser(this.input.value);
          this.input.value = '';
        }
    }

    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-md-9">
                        <input type="text" className="form-control" ref={ node => this.input = node } />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-success" onClick={ this.handleClick }>Добавить</button>
                    </div>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        reduceState: state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addUser }, dispatch);
}

const AddUserConnected = connect(mapStateToProps, mapDispatchToProps)(AddUser);

export default AddUserConnected;