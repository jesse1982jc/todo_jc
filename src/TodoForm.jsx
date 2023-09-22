import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [item, setItem] = useState("");

  // 新增待辦事項到 todos 裡
  const handleSubmit = (e) => {
    // !!! 記得處理!!! 防止表單送出自動更新畫面
    e.preventDefault();

    // 空字串就不處理
    if (item === "") return;

    // 加入 todos
    // 在 handleSubmit() 中，做 addTodo() 的事
    // 把 addTodo() 獨立寫成一個 function
    addTodo(item);

    // 清除輸入框文字
    setItem("");
  };

  // 輸入框文字同步更新
  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <h1>Todo JC</h1>
      <input
        className="todo-input"
        type="text"
        value={item}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
