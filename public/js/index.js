import React from 'react';
import {render} from 'react-dom';
import AddTodo from './containers/add-todo';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from './reducers/reducer';

const store = createStore(reducer);

class App extends React.Component {
    add(value) {
        store.dispatch({type: 'ADD', value});
    }

    render() {
        return <Provider store={store}>
            <AddTodo onAdd={this.add.bind(this)}/>
        </Provider>
    }
}

render(<App/>, document.getElementById('root'));