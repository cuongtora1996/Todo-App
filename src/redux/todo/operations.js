import actions from './actions';

const updateTodoState = (id) => dispatch => {
  return dispatch(actions.updateTodoState(id));
};
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const addTodo = (text) => dispatch => {
  return dispatch(actions.addTodo({text, id: uuidv4()}))
};

const removeTodo = (id) => dispatch => {
  return dispatch(actions.removeTodo(id))
};

export default {
    updateTodoState,
    removeTodo,
    addTodo,
}