import Footer from "./components/Footer";
import Home from "./pages/home";
import SingleMovie from "./pages/singleMovie";
// import Destination from "./pages/destination";
// import Crew from "./pages/crew";
// import Technology from "./pages/technology";
//added all paths for pages

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} /> */}
          <Route path="/movies/:id" element={<SingleMovie />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
