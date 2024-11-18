import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet for routing
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.scss';
import Header from './Components/Page/Header';
import SideBar from './Components/Page/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InformationSystem from './Components/Information/InformationSystem';
import History from './Components/History/History';
import ManagePage from './Components/ManagePage/ManagePage';
import ManagePrinter from './Components/ManagePrinter/ManagePrinter';
import Overal from './Components/Overal/Overal';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <SideBar />
        <main className="main-content">
          {/* This will render the child routes */}
          <Routes>
       
          <Route index element={<Overal />} /> {/* Default child */}
          <Route path="tongquan" element={<Overal />} />
          <Route path="thongtin" element={<InformationSystem />} />
          <Route path="lichsu" element={<History />} />
          <Route path="quanlymayin" element={<ManagePage />} />
          <Route path="quanlytrangin" element={<ManagePrinter />} />
      
      </Routes>
         
          <Outlet /> 
        </main>
      </div>
    </>
  );
}

export default App;
