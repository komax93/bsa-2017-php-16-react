import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterUser } from './actions';

class FilterUser extends Component {
  render() {
    const { filterUser } = this.props;
    return (
      <div className="row">
        <div className="col-md-9">
          <input type="text" className="form-control" placeholder="Filter By User" ref={ node => this.input = node } onChange={ () => filterUser(this.input.value) }/>
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
  return bindActionCreators({ filterUser }, dispatch);
}

const FilterUserConnected = connect(mapStateToProps, mapDispatchToProps)(FilterUser);

export default FilterUserConnected;