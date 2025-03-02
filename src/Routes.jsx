import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./views/App";
import Home from "./views/Home";
import Error from "./views/Error";

function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/404" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default routes;
