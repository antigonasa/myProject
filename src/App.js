import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.scss';
import Loader from './components/shared/Loader/Loader';
import ScrollToTop from './ScrollToTop';

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
