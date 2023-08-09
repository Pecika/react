import React, { useState } from 'react';

const HitnostZadatka = ({ filterTasks }) => {
  const [sortOption, setSortOption] = useState('datum-najranije');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    filterTasks(e.target.value);
  };

  return (
    <div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
      <form>
        <select value={sortOption} onChange={handleSortChange} id="sort">
          <option value="datum-najranije">Od najblizeg roka</option>
          <option value="datum-najkasnije">Od najkasnijeg roka</option>
          <option value="istekao-rok">Istekao rok obavljanja</option>
        </select>
      </form>
    </div>
  );
};

export default HitnostZadatka;


