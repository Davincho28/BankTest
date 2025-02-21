import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './views/App';
import Home from './views/Home';

function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default routes;
