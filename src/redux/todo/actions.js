import {UPDATE_TODO_ITEM_STATE, ADD_TODO, REMOVE_TODO} from './constants';

const updateTodoState = id => ({
  type: UPDATE_TODO_ITEM_STATE,
  id,
});

const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

const removeTodo = id => ({
  type: REMOVE_TODO,
  id
})
export default {
  updateTodoState,
  addTodo,
  removeTodo
};
