import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [currentRecord, setCurrentRecord] = useState(null);

  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <Form currentRecord={currentRecord} setCurrentRecord={setCurrentRecord} fetchRecords={() => {}} />
      <List setCurrentRecord={setCurrentRecord} />
    </div>
  );
}

export default App;
