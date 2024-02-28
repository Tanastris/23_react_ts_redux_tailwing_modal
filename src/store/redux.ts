import { configureStore, createSlice } from '@reduxjs/toolkit';
import { TodoType } from '../types/types';
import type { PayloadAction } from '@reduxjs/toolkit';

type InitTodosState = {
  todosArr: TodoType[];
};

export const initTodos: InitTodosState = {
  todosArr: [
    { id: 1, title: 'Pull ups', isDone: false },
    { id: 2, title: 'Read a book', isDone: true },
    { id: 3, title: 'Buy Bread', isDone: false }, // idToToggle === 3
    { id: 4, title: 'Buy Bread', isDone: true }, // id to dele
  ],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initTodos,
  reducers: {
    addTodo() {},
    deleteTodo(state, action: PayloadAction<number>) {
      console.log('deleteTodo action is called', action.payload);
      state.todosArr = state.todosArr.filter(
        (tObj) => tObj.id !== action.payload
      );
    },
  },
});

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export const todoActions = todosSlice.actions;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
