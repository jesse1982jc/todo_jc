import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {!todos.length && "No Todos"}
      {todos.map((todo) => {
        return (
          // li(item) start
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />

          //  li(item) end
        );
      })}
    </ul>
  );
}
