// vendor imports 
import { useState } from 'react';
// components
import ToDoList from './ToDoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Listen React Course", done: false },
    { id: 2, task: "Eat Dinner", done: false },
    { id: 3, task: "Go to Sleep", done: false }
  ]);

  const markTodoAsDone = (index) => {
    let todoList = todos.map((todo, i) => {
      if(index === i) {
        return {
          ...todo,
          done: !todo.done
        } 
      } else {
        return todo;
      }
    });
    setTodos(todoList);
  };

  return (
    <div className='app'>
      <ToDoList todos={todos} toggleToDo={markTodoAsDone} />
    </div>
  );
};

/* Homework 08
  1. Create simple signup form. The form should be consisted of:
    * First name - reuqired, minimum length 2 characters, maximum length 15 characters
    * Last name - reuqired, minimum length 2 characters, maximum length 20 characters
    * Email - required; (**bonus** check if it is valid email)
    * Password - required
    * 'Sign Up' button
    For all the fields above, display the correct validation messages.
    2. Finish ToDo list app. 
*/

export default App;
