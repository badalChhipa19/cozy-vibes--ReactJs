import { Routes, Route, Outlet } from "react-router-dom";

import Navigation from "./routers/navigation/navigation.component";
import Auth from "./routers/auth/auth.component";
import Home from "./routers/Home/home.component";
import Hotel from "./routers/hotel/hotels.component";
import Rooms from "./routers/rooms/rooms.component";
import BookingCard from "./routers/card-booking/booking-card.component";
import PrivateRoute from "./util/privateroute.util";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />} exact>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="hotel" element={<Hotel />} />
          {/* <Route path="hotel/rooms" element={<Rooms />} /> */}
          <Route
            path="hotel/rooms"
            element={
              <PrivateRoute other={<Auth />}>
                <Rooms />
              </PrivateRoute>
            }
          />
          <Route path="booking/*" element={<BookingCard />} />
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
