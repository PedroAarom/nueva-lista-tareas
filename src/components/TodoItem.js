// TodoItem.jsx
import React, { useState } from 'react';
 
function TodoItem({ todo, onDelete, onEdit }) {
 const [isEditing, setIsEditing] = useState(false);
 const [newText, setNewText] = useState(todo);
 
 const handleEditChange = (e) => {
    setNewText(e.target.value);
 };
 
 const handleEditSubmit = () => {
    onEdit(newText);
    setIsEditing(false);
 };
 
 return (
   <li>
      {isEditing ? (
        <>
          <input
            id="nuevo" 
            type="text" 
            value={newText} 
            onChange={handleEditChange} 
          />
          <button id="btngu" onClick={handleEditSubmit}>Guardar</button>
        </>
     ) : (
        <>
          <span id="texto">{todo}</span>
          <button id="btnedit" onClick={() => setIsEditing(true)}>Editar</button>
          <button id="btndelete" onClick={onDelete}>Eliminar</button>
        </>
     )}
    </li>
 );
}
 
export default TodoItem;
