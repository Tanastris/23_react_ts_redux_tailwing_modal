/* eslint-disable no-case-declarations */
import OneTodo from './OneTodo';
import AddTodo from './AddTodo';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux';

// aprasyti tipa initTodos

// iskelti initTodos i store/redux.ts

type TodoType = {
  id: number;
  title: string;
  isDone: boolean;
};

const initTodos: TodoType[] = [
  { id: 1, title: 'Pull ups', isDone: false },
  { id: 2, title: 'Read a book', isDone: true },
  { id: 3, title: 'Buy Bread', isDone: false }, // idToToggle === 3
  { id: 4, title: 'Buy Bread', isDone: true }, // id to dele
];

let countId = 5;

const ACT = {
  DEL: 'DEL',
  add: 'ADD',
  toggle: 'TOGGLE',
};

export default function TodoApp() {
  // pasitikrinti ar turiu todos localStorage, jei turiu imu is storage, jei ne initTodos
  // const [state, dispach] = useReducer(todoReducer, initTodos);

  const state = useSelector((state: RootState) => state.todos.todosArr);

  // console.log('state ===', state);

  const handleDelete = (idToDelete) => {
    // dispach({ type: ACT.DEL, payload: idToDelete });
  };

  const handleNewTodo = (newTodoVal) => {
    console.log('ivesta reiksme', newTodoVal);
    // dispach({ type: ACT.add, payload: newTodoVal });
  };

  const handleDone = (idToToggle) => {
    console.log('handleDone', idToToggle);
    // dispach({ type: ACT.toggle, payload: idToToggle });
  };

  // const handleUpdate = () => {};

  const all = state.length;

  const complete = state.filter((tObj) => tObj.isDone).length;

  return (
    <div>
      <div className='flex justify-between mb-4'>
        <h2 className='text-2xl mb-10'>TodoApp</h2>
        <p className='font-bold text-2xl p-4 border border-sky-600 rounded-md'>
          {complete}
          <span className='font-normal'>/{all}</span>
        </p>
      </div>

      <AddTodo />

      {state.length === 0 && (
        <p className='text-2xl text-center p-5 border border-indigo-600'>
          There are no todos, please add some
        </p>
      )}

      <ul className='flex flex-col gap-3 '>
        {state.map((tObj) => (
          <OneTodo
            onDelete={handleDelete}
            onDone={handleDone}
            key={tObj.id}
            item={tObj}
          />
        ))}
      </ul>
    </div>
  );
}
