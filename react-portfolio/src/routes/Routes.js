import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import ScrollablePage from '../components/ScrollablePage';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/scrollable-page" element={<ScrollablePage />} />
    </Routes>
  );
};

export default RoutesComponent;


