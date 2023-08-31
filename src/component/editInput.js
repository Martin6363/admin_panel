import React from 'react';

export function EditInput({ current, setList, setEditingIndex, saveEdit }) {
  function handleInput(e) {
    const { name, value } = e.target;
    const newList = setList.map((el) =>
      el.id === current.id ? { ...el, [name]: value } : el
    );
    setEditingIndex(newList);
  }

  const handleSave = () => {
    saveEdit();
  };

  return (
    <>
      <tr>
        <td><input type='text' name='name' onChange={handleInput} value={current.name} /></td>
        <td><input type='text' name='lastName' onChange={handleInput} value={current.lastName} /></td>
        <td><input type='text' name='email' onChange={handleInput} value={current.email} /></td>
        <td><button onClick={handleSave}>Save</button></td>
      </tr>
    </>
  );
}
