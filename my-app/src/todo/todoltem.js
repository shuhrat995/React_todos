import React, {useContext} from 'react';  
import './todo.css';
import Context from './context';

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context);  
  const classes = [];

  if (todo.completed) {
    classes.push('done');
  }

  return (
    <li className="li-item">
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
          className='sample-input'
        />
        <b>{index + 1}</b>
        &nbsp;
        {todo.title}
      </span>
      <button 
        className="rm" 
        onClick={() => removeTodo(todo.id)}  
      >
        &times;
      </button>
    </li>
  );
}

export default TodoItem;