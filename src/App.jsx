import React from 'react';

//css import
import './App.css'

//library import
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//component import
import Login from './Componen/Login';
import EditTask from './Componen/EditTask';
import ViewTask from './Componen/ViewTask';
import JokesSpot from './Componen/JokesSpot';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editTask" element={<EditTask />} />
        <Route path="/viewTask" element={<ViewTask />} />
        <Route path="/jokesSpot" element={<JokesSpot />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App