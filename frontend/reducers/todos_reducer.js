import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};



const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      const id = action.todo.id;
      const newTodo = { [id]: action.todo };
      merge(newTodo, state);
      return newTodo;
    case REMOVE_TODO:
    console.log(action.todo);
      merge(newState, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }

};



export default todosReducer;
















//
