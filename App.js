import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/redux/index';
import thunk from 'redux-thunk';
import AppNavigator from './src/areas/AppNavigator';

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
