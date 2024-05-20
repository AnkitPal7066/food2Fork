import react, { useState } from 'react';
import './App.css';
import Bhero from './comp/Bhero';
import Navbar from './comp/Navbar';
import Search from './comp/Search';
import Shero from './comp/Shero';

function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Navbar />
      <Search setInputValue={setInputValue} inputValue={inputValue} />
      {
        inputValue !== "" ? <Bhero inputValue={inputValue} /> : <Shero />
      }
    </div>
  );
}

export default App;
