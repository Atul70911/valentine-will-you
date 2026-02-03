import { useState } from 'react';
import './App.css';
import Home from './components/Home.jsx';
import Propose from './components/Propose.jsx';
import Done from './components/Done.jsx';

function App() {
  const [page, setPage] = useState("Home");
   const [email, setEmail] = useState('');

  return (
    <div className="app-content">
      {page === "Home" && <Home setEmail={setEmail} email={email} setPage={setPage} />}
      {page === "Propose" && <Propose setPage={setPage} email={email} />}
      {page== "Done" && <Done/> }
    </div>
  );
}

export default App;
