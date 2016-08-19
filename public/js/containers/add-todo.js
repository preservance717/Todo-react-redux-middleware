import React, {Component, PropTypes} from 'react';
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

AddTodo.propTypes = {
    onAdd:PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text)=> {
            dispatch({type: 'ADD', text});
        }
    }
};

export default connect(()=>{}, mapDispatchToProps)(AddTodo);