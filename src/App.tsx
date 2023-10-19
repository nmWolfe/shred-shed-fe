import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";

import "./App.scss";
// import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Compare from "./pages/Compare/Compare";
import Share from "./pages/Share/Share";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <>
      <Routes>
        {/* <LoadingSpinner /> */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="compare" element={<Compare />} />
        <Route path="share" element={<Share />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
