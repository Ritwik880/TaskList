import React, { useState } from 'react';

//css import
import './App.css'

//library import
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//component import
import Login from './Component/Login';
import EditTask from './Component/EditTask';
import ViewTask from './Component/ViewTask';
import JokesSpot from './Component/JokesSpot';
import PrivateRoute from './Component/PrivateRoute';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  return (
    <BrowserRouter>
      <Navbar />
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
      <Footer />
    </BrowserRouter>
  )
}

export default App