import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import DirSelect from '../helpers/DirSelect';
import NavBar from '../helpers/NavBar';

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<DirSelect />} />
        </Routes>
      </Router>
    </div>
  );
}
