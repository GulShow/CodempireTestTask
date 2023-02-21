import React, { useState } from 'react';
import './App.css';
import BodyTable from './components/BodyTable/BodyTable';
import Header from './components/Header/Header';

function App() {
  const [filterText, setFilterText] = useState('');
  return (
    <>
      <Header filterText={filterText} onFilterTextChange={setFilterText} />
      <main>
        <BodyTable filterText={filterText} />
      </main>
    </>
  );
}

export default App;
