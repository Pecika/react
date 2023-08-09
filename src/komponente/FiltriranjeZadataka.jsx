import React, { useState } from 'react';

const FiltriranjeZadataka = ({ filterTasks }) => {
  const [selectedOption, setSelectedOption] = useState('svi');

  const handleFilterChange = (e) => {
    setSelectedOption(e.target.value);
    filterTasks(e.target.value);
  };

  return (
    <div>
      <form>
        <select value={selectedOption} onChange={handleFilterChange}>
          <option value="svi">Svi zadaci</option>
          <option value="zavrseni">Završeni zadaci</option>
          <option value="nezavrseni">Nezavršeni zadaci</option>
        </select>
      </form>
    </div>
  );
};

export default FiltriranjeZadataka;
