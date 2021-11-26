import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addNewTask, completeTask, deleteTask } from './actions';

function App() {
  const [input, setInput] = useState();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {todos.map((v, i) => (
          <div>
            <input type='checkbox' onClick={() => dispatch(completeTask(i))} />
            <span className={v.isComplete && 'complete'}>{v.task}</span>
            <button onClick={() => dispatch(deleteTask(i))}>X</button>
          </div>
        ))}
        <div>
          <input
            type='text'
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            onClick={() => {
              dispatch(addNewTask(input));
              setInput('');
            }}
          >
            Submit
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
