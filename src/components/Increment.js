import React, { Component } from 'react';
import {connect} from 'react-redux';

class Increments extends Component {
    plusIncrement = () => {
        this
            .props
            .dispatch({type: "INCREMENT"});
    }
    minIncrement = () => {
        this
            .props
            .dispatch({type: "DECREASE"});
    }

    render() {
        return (
            <div>
              <button onClick={this.plusIncrement}>+</button>
              <span></span><p>{this.state.angka}</p><span></span>
              <button onClick={this.minIncrement}>+</button>  
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {angka: state.angka};
}

export default connect(mapStateToProps)(Increments);