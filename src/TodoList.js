import React from "react";

const TodoList = ({ todo, deletedHandler }) =>{ // Corrected the prop name to match the one used in App.js
  return (
    <div>
      {todo.map((todo, index) => (
        <div key={index}>
          <h6>
            {todo}
            <button onClick={() => deletedHandler(index)} className="btn-danger">Delete</button> {/* Use an arrow function */}
          </h6>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
