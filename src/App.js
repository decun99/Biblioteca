import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AsignaturaView from './components/AsignaturaView';
import Account from './components/Account';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/asignaturas/:asignaturaName" element={<AsignaturaView />} />
        <Route path="/account" element={<Account/>} />


      </Routes>
    </BrowserRouter>
  );
};
export default App;