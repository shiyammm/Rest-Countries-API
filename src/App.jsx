import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import Countries from './containers/Countries';
import Country from './containers/Country';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/home" element={<Countries />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/:name" element={<Country />} />
        <Route path="/home/:name" element={<Country />} />
      </Routes>
    </>
  );
};

export default App;
