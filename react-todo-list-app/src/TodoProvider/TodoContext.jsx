// TodoContext.js
import React, { createContext, useReducer, useEffect } from 'react';

// Initial State
// const initialState = {
//   todos: [],
//   filter: 'all', // all, active, completed
// };

// Read initial state from localStorage or set default state
const initialState = JSON.parse(localStorage.getItem('todos')) || {
  todos: [],
  filter: 'all', // all, active, completed
};

// Actions
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_FILTER = 'SET_FILTER';

// Reducer
function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

// Context
// export const TodoContext = createContext();
export const TodoContext = createContext(initialState);

// Provider Component
export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Use useEffect to write to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
