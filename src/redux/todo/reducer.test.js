import reducer from './reducer';
import {UPDATE_TODO_ITEM_STATE, ADD_TODO, REMOVE_TODO} from './constants';

describe('todos reducer', () => {
  it('should return the init state', () => {
    expect(reducer(undefined, {})).toEqual({
      todos: [
        {
          id: 1,
          text: 'Item 1',
          isCompleted: false,
        },
      ],
    });
  });

  it('should handle ADD_TODO', () => {
    expect(
      reducer(
        {todos: []},
        {
          type: ADD_TODO,
          todo: {text: 'Item 0', id: 0},
        },
      ),
    ).toEqual({
      todos: [
        {
          text: 'Item 0',
          isCompleted: false,
          id: 0,
        },
      ],
    });

    expect(
      reducer(
        {
          todos: [
            {
              text: 'Item 0',
              isCompleted: false,
              id: 0,
            },
          ],
        },
        {
          type: ADD_TODO,
          todo: {text: 'Item 1', id: 1},
        },
      ),
    ).toEqual({
      todos: [
        {
          text: 'Item 0',
          isCompleted: false,
          id: 0,
        },
        {
          text: 'Item 1',
          isCompleted: false,
          id: 1,
        },
      ],
    });
  });

  it('should handle REMOVE_TODO', () => {
    expect(
      reducer(
        {todos: []},
        {
          type: REMOVE_TODO,
          id: 0,
        },
      ),
    ).toEqual({
      todos: [],
    });

    expect(
      reducer(
        {
          todos: [
            {
              text: 'Item 0',
              isCompleted: false,
              id: 0,
            },
          ],
        },
        {
          type: REMOVE_TODO,
          id: 0,
        },
      ),
    ).toEqual({
      todos: [],
    });

    expect(
      reducer(
        {
          todos: [
            {
              text: 'Item 0',
              isCompleted: false,
              id: 0,
            },
            {
              text: 'Item 1',
              isCompleted: false,
              id: 1,
            },
          ],
        },
        {
          type: REMOVE_TODO,
          id: 0,
        },
      ),
    ).toEqual({
      todos: [
        {
          text: 'Item 1',
          isCompleted: false,
          id: 1,
        },
      ],
    });
  });

  it('should handle UPDATE_TODO_ITEM_STATE', () => {
    expect(
      reducer(
        {
          todos: [
            {
              text: 'Item 0',
              isCompleted: false,
              id: 0,
            },
          ],
        },
        {
          type: UPDATE_TODO_ITEM_STATE,
          id: 1,
        },
      ),
    ).toEqual({
      todos: [
        {
          text: 'Item 0',
          isCompleted: false,
          id: 0,
        },
      ],
    });

    expect(
      reducer(
        {
          todos: [
            {
              text: 'Item 0',
              isCompleted: false,
              id: 0,
            },
          ],
        },
        {
          type: UPDATE_TODO_ITEM_STATE,
          id: 0,
        },
      ),
    ).toEqual({
      todos: [
        {
          text: 'Item 0',
          isCompleted: true,
          id: 0,
        },
      ],
    });

    expect(
      reducer(
        {
          todos: [
            {
              text: 'Item 0',
              isCompleted: false,
              id: 0,
            },
            {
              text: 'Item 1',
              isCompleted: true,
              id: 1,
            },
          ],
        },
        {
          type: UPDATE_TODO_ITEM_STATE,
          id: 1,
        },
      ),
    ).toEqual({
      todos: [
        {
          text: 'Item 0',
          isCompleted: false,
          id: 0,
        },
        {
          text: 'Item 1',
          isCompleted: false,
          id: 1,
        },
      ],
    });
  });
});
