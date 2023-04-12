import React from 'react'
import Header from './components/header';
import IndexPage from './pages/indexPage';
import './App.css';


function App() {
  return (
    <div className="App">
        <div className='max-w-[1300px] mx-auto px-[2.5rem]'>
            <Header/>
            <IndexPage/>
        </div>
    </div>
  );
}

export default App;
