import { combineReducers } from 'redux';

import { todosReducer as todos } from '../pages/Todos/redux/reducer';

const rootReducer = combineReducers({
  todos,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
