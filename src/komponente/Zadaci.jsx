import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JedanZadatak from './JedanZadatak';
import FiltriranjeZadataka from './FiltriranjeZadataka';
import HitnostZadatka from './HitnostZadatka'; // Dodajemo HitnostZadatka komponentu

const Zadaci = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  const initialValue = 'svi';
  const [filterOption, setFilterOption] = useState(initialValue);
  const [sortOption, setSortOption] = useState('datum-najranije'); // Define the sortOption state

  const handleTaskToggle = (id) => {
    const updatedTasks = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const applyFilter = () => {
    if (filterOption === 'zavrseni') {
      const filteredTasks = taskList.filter((task) => task.completed);
      return filteredTasks;
    } else if (filterOption === 'nezavrseni') {
      const filteredTasks = taskList.filter((task) => !task.completed);
      return filteredTasks;
    } else {
      return taskList;
    }
  };

  const handleFilterChange = (filterOption) => {
    setFilterOption(filterOption);
  };

  const handleSortChange = (sortOption) => { // Define the handleSortChange function
    setSortOption(sortOption);
    // Logic to sort the tasks based on the selected sort option
  };

  const filteredTasks = applyFilter();


  useEffect(() => {
    // Učitavanje podataka iz localStorage kada se komponenta montira
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div style={{ padding: '1em', backgroundColor: '#C3F9DC' }}>
      <div className="navbar">
        {/* Navbar content */}
      </div>
      <div style={{ display: 'flex', gap: '1.5em', alignItems: 'center' }}>
        <FiltriranjeZadataka filterTasks={handleFilterChange} />
        <HitnostZadatka filterTasks={handleSortChange} />
      </div>
      {filteredTasks.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 60px)' }}>
          <p style={{ fontSize: '20px', color: '#000', maxWidth: '800px', textAlign: 'center' }}>
            Trenutno nema zadataka! Kako biste kreirali novi zadatak kliknite na <Link to="/kreiraj-zadatak">kreiraj zadatak</Link>.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {filteredTasks.map((task) => (
            <JedanZadatak
              key={task.id}
              task={task}
              handleToggleCompleted={handleTaskToggle}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Zadaci;
