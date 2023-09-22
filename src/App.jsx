import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./styles.css";
import { useEffect, useState } from "react";

// 從 localStorage 取出資料
// getItem()
// 丟給 todos 陣列，當預設值
const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("Todo_Item"));
  if (!data) return [];
  return data;
};

function App() {
  const [todos, setTodos] = useState(getInitialData);

  // 存入 loacalStorage
  // setItem()
  useEffect(() => {
    localStorage.setItem("Todo_Item", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (item) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), title: item, completed: false },
      ];
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  return (
    <div>
      {/* form start */}
      <TodoForm addTodo={addTodo} />
      {/* form end */}
      <h2>Todo List</h2>
      {/* list start */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      {/* list end */}
    </div>
  );
}

export default App;
