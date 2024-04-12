import "./Todo.css";
import { useRef, useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const addItem = () => {
    const text = inputRef.current.value;
    const newText = { completed: false, text };
    setTodos([...todos, newText]);
    inputRef.current.value = "";
    console.log(text);
  };

  const doneItem = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    console.log(newTodos);
  };

  const deleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="to-do-container">
        <h1 className="app-titile">Todo List</h1>
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="li-style">
                <li
                  className={completed ? "done" : ""}
                  onClick={() => doneItem(index)}
                  key={index}
                >
                  {text}
                </li>
                <span onClick={() => deleteItem(index)}>X</span>
              </div>
            );
          })}
        </ul>
        <input
          className="f-input"
          ref={inputRef}
          type="text"
          placeholder="Enter Item..."
        />
        <button className="btn-add" onClick={() => addItem()}>
          Add
        </button>
      </div>
    </>
  );
}

export default Todo;
