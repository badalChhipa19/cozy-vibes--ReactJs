import { Routes, Route, Outlet } from "react-router-dom";

import Navigation from "./routers/navigation/navigation.component";
import Auth from "./routers/auth/auth.component";
import Home from "./routers/Home/home.component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />} exact>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="about" element={<h1>I'm About page</h1>} />
          <Route path="rooms" element={<h1>I'm Rooms page</h1>} />
          <Route path="resto&bar" element={<h1>I'm Resto page</h1>} />
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
