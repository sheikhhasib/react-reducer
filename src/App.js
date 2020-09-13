import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import ReducerCount from './components/ReducerCount/ReducerCount';
import PatientManagement from './components/ReducerCount/PatientManagement/PatientManagement';


function App() {
  
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
