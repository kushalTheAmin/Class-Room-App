import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configure()
{

  return createStore(
    rootReducer,
    [],
    composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
