import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import DirSelect from '../helpers/DirSelect';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DirSelect />} />
      </Routes>
    </Router>
  );
}
