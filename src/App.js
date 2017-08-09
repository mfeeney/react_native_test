import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import AppWithNavigationState from './AppNavigator';
import reducers from './reducers';

class App extends Component {
    store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    render() {
        console.log('Store', this.store);
        return (
            <Provider store={this.store}>                
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default App;
