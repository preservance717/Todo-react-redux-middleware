import React from 'react';
import {render} from 'react-dom';
import AddTodo from './containers/add-todo';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from './reducers/reducer';

const store = createStore(reducer);

class App extends React.Component {
    render() {
        return <Provider store={store}>
            <AddTodo/>
        </Provider>
    }
}

render(<App/>, document.getElementById('root'));