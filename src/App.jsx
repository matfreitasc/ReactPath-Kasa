import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Error from './pages/Error';
import Profile from './pages/Profile';
import About from './pages/About';

function App() {
  return (
    <div className='page-container'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile/:name' element={<Profile />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
