import React, { useEffect, useState } from 'react';
import './App.css';
import TestComponent from './TestComponent';
import ReactDOM from "react-dom/client";

  function App() {
    const [data, setData] = useState({name: 'John',age: 25,country: 'United Kingdom'});
  
    return  (
      <div className="App">
          <TestComponent sandData={data}/>
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);

export default App;
