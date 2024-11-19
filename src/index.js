import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overal from './Components/Overal/Overal';
import InformationSystem from './Components/Information/InformationSystem';
import History from './Components/FullHistory/History';
import Request from './Components/Request/Request';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Use App as the layout for child routes */}
        <Route path="/" element={<App />}>
          <Route index element={<Overal />} /> {/* Default route */}
          <Route path="tongquan" element={<Overal />} />
          <Route path="thongtin" element={<InformationSystem />} />
          <Route path="toanbo" element={<History />} />
          <Route path="yeucau" element={<Request />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
