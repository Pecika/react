import React from 'react';

const JedanZadatak = ({ task, handleToggleCompleted, handleDeleteTask }) => {
  const { id, text, opis, rok, completed } = task;

  const handleToggle = () => {
    handleToggleCompleted(id);
  };

  return (
    <div
      className={`task-item ${completed ? 'completed' : ''}`}
      style={{
        borderRadius: '10px',
        backgroundColor: '#f2f2f2',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '2em',
      }}
    >
      <h3 style={{ marginBottom: '0.5em', textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </h3>
      <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{opis}</p>
      <p>Rok za obavljanje: {rok}</p>
      <div style={{ display: 'flex', gap: '1em' }}>
        <button onClick={handleToggle} className={`task-button done`}>
          Završeno
        </button>
        <button onClick={() => handleDeleteTask(id)} className={`task-button delete`}>
          Obriši
        </button>
      </div>
    </div>
  );
};

export default JedanZadatak;
