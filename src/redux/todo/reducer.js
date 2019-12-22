import {UPDATE_TODO_ITEM_STATE, ADD_TODO, REMOVE_TODO} from './constants';

const defaultState = {
  todos: [
    {
      id: 1,
      text: 'Item 1',
      isCompleted: false,
    },
  ],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_TODO_ITEM_STATE:
      return {
        ...state,
        todos: state.todos.map(item =>
          item.id === action.id
            ? {...item, isCompleted: !item.isCompleted}
            : item,
        ),
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {...action.todo, isCompleted: false}],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
