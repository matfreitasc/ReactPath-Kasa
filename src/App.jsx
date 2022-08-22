import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Error from './pages/Error';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/:name' element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
