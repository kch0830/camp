import HeaderInput from "./components/HeaderInput";
import { useState } from "react";
import Todolist from "./components/Todolist";

function App() {
  const [todoState, setTodoState] = useState({
    todolist: [
      { id: 1, text: "할일1", isDone: true },
      { id: 2, text: "할일2", isDone: false },
    ],
    InputText: "",
  });

  const [id, setId] = useState(3);

  const onChange = (e) => {
    setTodoState({
      ...todoState,
      InputText: e.target.value,
    });
  };

  const onAddtodo = () => {
    const newTodoList = [
      ...todoState.todolist,
      { id: id, text: todoState.InputText, isDone: false },
    ];
    setTodoState({
      todolist: newTodoList,
      InputText: "",
    });
    setId(id + 1);
  };

  const onDelete = (id) => {
    const newTodoList = todoState.todolist.filter((todo) => {
      return todo.id !== id;
    });
    setTodoState({
      ...todoState,
      todolist: newTodoList,
    });
  };

  const onToggle = (id) => {
    const newTodoList = todoState.todolist.filter((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodoState({
      ...todoState,
      todolist: newTodoList,
    });
  };

  // search기능 만드는중인데 뭔말인고이게..
  // https://www.freecodecamp.org/korean/news/build-a-search-filter-using-react-and-react-hooks/
  // const [searchInput, setSearchInput] = useState("");
  // const searchItems = () => {
  //   setSearchInput(searchValue);
  //   todoState.filter((item) => {
  //     return Object.values(item)
  //       .join("")
  //       .toLowerCase()
  //       .includes(searchInput.toLowerCase());
  //   });
  // };

  // const filteredData = todoState.filter((item) => {
  //   return Object.values(item)
  //     .join("")
  //     .toLowerCase()
  //     .includes(searchInput.toLocaleLowerCase());
  // });

  return (
    <div className="App">
      <HeaderInput
        InputText={todoState.InputText}
        onChange={onChange}
        onAddtodo={onAddtodo}
      />
      <Todolist
        todolist={todoState.todolist}
        onDelete={onDelete}
        onToggle={onToggle}
      />

      {/* <input type="text" onChange={() => searchItems(e.target.value)} /> */}
    </div>
  );
}

export default App;
