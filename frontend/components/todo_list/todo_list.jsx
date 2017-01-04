import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';


 const TodoList = ({todos, receiveTodo, removeTodo }) => {

   console.log(todos);
   return (
     <div>
       <ul>
         {todos.map((todo, i) => (
           <TodoListItem key={i} todo={todo} removeTodo={ removeTodo } receiveTodo={ receiveTodo }/>
         ))}
       </ul>
       <TodoForm receiveTodo={ receiveTodo }/>
     </div>
   );
 };

export default TodoList;
