import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Sidenav from './Components/Sidenav';
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Statistics from "./Pages/Statistics";
import Login from "./Components/Login"
import SignIn from "./Components/SignIn";
import SettingsPage from "./Components/Dash";
import Checklist from "./Components/Checklist";
import AddTodo from "./Components/Data";
import List from "./Components/List";
import Dashboard from "./Components/Dash";
function App() {
  return (
    <div className="App">
      <Sidenav />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/data" element={<AddTodo />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
