import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Controlled from './pages/Controlled';
import Home from './pages/Home';
import Plain from './pages/Plain';
import Uncontrolled from './pages/Uncontrolled';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="plain" element={<Plain />} />
          <Route path="controlled" element={<Controlled />} />
          <Route path="uncontrolled" element={<Uncontrolled />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
