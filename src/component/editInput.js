import React from 'react'

export function EditInput({ current, list, setList, setEditingIndex }) {
  function handleInput (e) {
    const newList = list.map(el => (
      el.id === current.id ? {...el, [e.target.name] : e.target.value} : el
    ))
    setList(newList)
  }
  const handleSave = () => {
    setEditingIndex(-1);
  };
  return (
    <div>
      <tr>
        <td><input type='text' name='name' onChange={handleInput} value={current.name}/></td>
        <td><input type='text' name='name' onChange={handleInput} value={current.lastName}/></td>
        <td><input type='text' name='name' onChange={handleInput} value={current.email}/></td>
        <td><button onClick={handleSave}>Save</button></td>
      </tr>
    </div>
  )
}
