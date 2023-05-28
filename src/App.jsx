import React, { useState } from 'react';

//css import
import './App.css'

//library import
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//component import
import Login from './Componen/Login';
import EditTask from './Componen/EditTask';
import ViewTask from './Componen/ViewTask';
import JokesSpot from './Componen/JokesSpot';
import PrivateRoute from './Componen/PrivateRoute';


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login signIn={setIsSignedIn} />} />
        <Route
          path="/editTask"
          element={
            <PrivateRoute isSignedIn={isSignedIn}>
              <EditTask />
            </PrivateRoute>
          }
        />
        <Route
          path="/viewTask"
          element={
            <PrivateRoute isSignedIn={isSignedIn}>
              <ViewTask />
            </PrivateRoute>
          }
        />
        <Route
          path="/jokesSpot"
          element={
            <PrivateRoute isSignedIn={isSignedIn}>
              <JokesSpot />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App