import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import * as actions from './actions';
import 'babel-polyfill';
import thunkMiddleware from 'redux-thunk';

const reducer = (state = { fetched: false }, action) => {
  switch (action.type) {
    case 'FETCH_STARTED':
      return { ...state, fetched: false };
    case 'FETCH_COMPLETED':
      return { ...state, fetched: true };
    default:
      return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.dispatch(actions.fetchAll());

class Counter extends React.Component {
  static propTypes = {
    fetched: PropTypes.bool
  };

  render() {
    const { fetched } = this.props;

    return (
      <div>
        <div>{`${fetched}`}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
  }
};

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

render(
  <Provider store={store}>
    <Counter />
  </Provider>
  , document.getElementById('root')
);