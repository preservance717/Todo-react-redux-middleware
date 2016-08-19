import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddTodo extends Component {
    add() {
        this.props.onAdd(this.refs.input.value)
    }

    render() {
        return <div>
            <input type="text" ref="input"/>
            <button onClick={this.add.bind(this)}>+</button>
        </div>
    }
}

export default connect()(AddTodo);