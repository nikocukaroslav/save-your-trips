import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TripsProvider } from "./Contexts/TripsContext.jsx";

import Homepage from "./Pages/Homepage.jsx";
import TripsPage from "./Pages/TripsPage.jsx";
import Scheduled from "./Pages/Scheduled.jsx";
import Login from "./Pages/Login.jsx";
import AddNewAlbum from "./Pages/AddNewAlbum.jsx";

function App() {
  return (
    <TripsProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="trips" element={<TripsPage />}></Route>
          <Route path="trips/addNewAlbum" element={<AddNewAlbum />} />
          <Route path="scheduled" element={<Scheduled />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </TripsProvider>
  );
}

export default App;
