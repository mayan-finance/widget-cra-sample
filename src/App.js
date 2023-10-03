import './App.css';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <a href="/">Root</a>
        <a href="/widget">Widget</a>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
