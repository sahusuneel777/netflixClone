import { Route, Routes } from 'react-router-dom'

import './App.module.scss';
import Home from './pages/home/Home';
// import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/watch" element={<Watch/>} />
        {/* {/* <Redirect component={Notfound}/> */}
      </Routes>

      {/* <Watch /> */}
    </div>
  );
}

export default App;
