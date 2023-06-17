import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Matemáticas' },
    { id: 2, name: 'Historia' },
    { id: 3, name: 'Ciencias' },
  ]);

  const [newSubject, setNewSubject] = useState('');

  const addSubject = () => {
    if (newSubject.trim() !== '') {
      const newId = Math.max(...subjects.map((subject) => subject.id)) + 1;
      const newSubjectObj = { id: newId, name: newSubject };
      setSubjects([...subjects, newSubjectObj]);
      setNewSubject('');
    }
  };

  const removeSubject = (id) => {
    const updatedSubjects = subjects.filter((subject) => subject.id !== id);
    setSubjects(updatedSubjects);
  };

  const handleInputChange = (event) => {
    setNewSubject(event.target.value);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Asignaturas:</h3>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.id}>
            <Link to={`/asignaturas/${subject.name}`}>{subject.name}</Link>
            <button onClick={() => removeSubject(subject.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Agregar asignatura:</h3>
        <input type="text" value={newSubject} onChange={handleInputChange} />
        <button onClick={addSubject}>Agregar</button>
      </div>
    </div>
  );
};

export default Dashboard;
