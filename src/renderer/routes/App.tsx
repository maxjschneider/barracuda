import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import DirSelect from '../helpers/DirSelect';
import NavBar from '../helpers/NavBar';
import Settings from '../routes/Settings';

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<DirSelect prompt="Test" />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}
