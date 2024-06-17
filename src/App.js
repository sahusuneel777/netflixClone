import { Route, Routes } from 'react-router-dom'

import './App.module.scss';
import Home from './pages/home/Home';
// import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Favourites from './pages/favorites/Favourites';
import Notfound from './pages/notFound/Notfound';
import Details from './pages/details/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/watch" element={<Watch />} />
        <Route exact path="/watchlater" element={<Favourites />} />
        <Route exact path="/:media_type/:id" element={<Details/>}/>
        <Route path ="*" element={<Notfound />} />
      </Routes>

      {/* <Watch /> */}
    </div>
  );
}

export default App;
