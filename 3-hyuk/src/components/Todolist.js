function Todolist({ todolist, onDelete, onToggle }) {
  return (
    <>
      <div>
        {todolist &&
          todolist.map((todo) => {
            return (
              <li key={todo.id}>
                <span
                  onClick={() => {
                    onToggle(todo.id);
                  }}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => {
                    onDelete(todo.id);
                  }}
                >
                  삭제
                </button>
              </li>
            );
          })}
      </div>
    </>
  );
}

export default Todolist;
