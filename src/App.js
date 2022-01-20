import Home from './components/Pages/Home';
import Catalogue from './components/Pages/Catalogue';
import { Route, Routes, useLocation } from 'react-router-dom';
import AnimatedPage from './components/Pages/AnimatedPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route
          exact
          path='/catalogue'
          element={
            <AnimatedPage type='left'>
              <Catalogue />
            </AnimatedPage>
          }
        />
        <Route
          path='/'
          element={
            <AnimatedPage type='right'>
              <Home />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
