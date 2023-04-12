import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter, Routes , Route } from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/register';
import { UserContextProvider } from './userContext';
import IndexPage from './pages/indexPage';
import Create from './pages/create';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
            <Routes>
                <Route index element={<App/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route index element={<IndexPage/>} />
                <Route path='/register' element={<Register/>}/>
                <Route path='/create' element={<Create/>}/>
            </Routes>
      </UserContextProvider>   
    </BrowserRouter>
     
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
