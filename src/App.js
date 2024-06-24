import React, { useState } from 'react'; // Import React and useState
import TodoList from './TodoList';

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const onChanger = e => {
    setTask(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    const data = [...todo, task];
    setTodo(data);
    setTask('');
  }

  const deletedHandler = (indexValue) => { // Corrected the typo here, it should be "deletedHandler"
    const newData = todo.filter((item, index) => index !== indexValue);
    setTodo(newData);
  }

  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          <center>
            <h1 className='card-title-md'>Todo List Example</h1>
            <form onSubmit={submitHandler}>
              <input type='text' placeholder='Enter the text' name='task' value={task} onChange={onChanger} className='form-control-md' />
              <input type='submit' value='Submit' name='submit'  className='btn-success'/>
            </form><br/>
            <TodoList todo={todo} deletedHandler={deletedHandler} /> {/* Corrected the prop name here */}
          </center>
        </div>
      </div>
    </div>
  );
}

export default App;
