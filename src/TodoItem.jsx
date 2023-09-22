export default function TodoItem({
  id,
  title,
  completed,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li className="todo-li">
      <input
        onChange={() => toggleTodo(id)}
        className="todo-li-input"
        type="checkbox"
        checked={completed}
      />
      <label
        style={{ textDecorationLine: completed && "line-through" }}
        // style={{ textDecorationLine: completed ? "line-through" : "none" }}
        className="todo-li-label"
      >
        {title}
      </label>
      <button onClick={() => deleteTodo(id)}>DELETE</button>
    </li>
  );
}
