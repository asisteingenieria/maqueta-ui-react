// src/App.jsx
import React from 'react';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import PersonalDataForm from './components/modules/PersonalDataForm';
import PolicyTable from './components/modules/PolicyTable';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar fijo a la izquierda */}
      <Sidebar />

      {/*  <PolicyTable /> */}
      <main className="flex-1 p-6">
        <Header />
        <PersonalDataForm />
        {/*  <PolicyTable /> */}
      </main>
    </div>
  );
}

export default App;
