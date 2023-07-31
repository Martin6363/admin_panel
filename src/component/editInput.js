import React from 'react'

export function EditInput({ current, setList, setEditingIndex }) {
  function handleInput (e) {
    const { name, value } = e.target
    setList((prevList) =>
      prevList.map((el) => (
        el.id === current.id ? { ...el, [name]: value } : el
        )
      )
    );
  }

  const handleSave = () => {
    setEditingIndex(-1);
  };
  return (
    <div>
      <tr>
        <td><input type='text' name='name' onChange={handleInput} value={current.name}/></td>
        <td><input type='text' name='lastName' onChange={handleInput} value={current.lastName}/></td>
        <td><input type='text' name='email' onChange={handleInput} value={current.email}/></td>
        <td><button onClick={handleSave}>Save</button></td>
      </tr>
    </div>
  )
}
