import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { render } from '@testing-library/react';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="container">
          {/* switch => 순서 중요 !!!!!!! (또는) exact 속성을 넣어주면 완전히 똑같아야지만 매치가 됨 !!! ㄴ*/}
          <Switch>
            {/* navbar 밑 변경 */}

            {/* home */}
            <Route path="/" exact>
              <Home />
            </Route>

            {/* movies */}
            <Route path="/movies">
              <Movies />
            </Route>

            {/* users */}
            <Route path="/users">
              <Users />
            </Route>

          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;