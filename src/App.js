import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './container/LandingPage/LandingPage.js';
import SignIn from "./container/SignIn/SignIn.js";

function App() {

  const isUserLoggedIn = false;

  return (
    <BrowserRouter>
      <div className = "app">
        <Routes>
          <Route path = "/" 
          element = {isUserLoggedIn ? <h1> Hello User</h1> : <LandingPage/>} 
          />
          <Route path = "sign-in"
            element = {<SignIn />}
          />
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;
