function HeaderInput({ InputText, onChange, onAddtodo }) {
  return (
    <>
      <h2>to do list</h2>
      <input value={InputText} onChange={onChange} />
      <button onClick={onAddtodo}>++</button>
    </>
  );
}

export default HeaderInput;
