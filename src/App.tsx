
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Ленивая загрузка страниц
const Index = lazy(() => import('./pages/Index'));
const DollCreator = lazy(() => import('./pages/DollCreator'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex h-screen items-center justify-center">Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/doll-creator" element={<DollCreator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
