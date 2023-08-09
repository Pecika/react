import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './komponente/Navbar';
import Pocetna from './komponente/Pocetna';
import Zadaci from './komponente/Zadaci';
import KreirajZadatak from './komponente/KreirajZadatak';
import HitnostZadatka from './komponente/HitnostZadatka'; // Dodajemo HitnostZadatka komponentu
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FiltriranjeZadataka from './komponente/FiltriranjeZadataka';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <Router>
      <div className="App">
        <header>        
        </header>

        <body>
          <nav>
            <Navbar />
          </nav>

          <Routes>
            <Route exact path="/" element={<Pocetna />} />
            <Route path="/to-do-lista" element={
              <div>
              
                <Zadaci tasks={tasks} />
              </div>
            } />
            <Route path="/kreiraj-zadatak" element={<KreirajZadatak addTask={addTask} />} />
          </Routes>
        </body>
      </div>
    </Router>
  );
}

export default App;
