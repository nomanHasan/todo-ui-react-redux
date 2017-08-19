// Set up your root reducer here...
import { combineReducers } from 'redux';

import todos from './todo.reducers'

 export default combineReducers({
    todos:todos
});