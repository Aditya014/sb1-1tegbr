import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { useAuthStore } from './store/authStore';
import { Loader } from './components/Loader';

function App() {
  const { user, loading, initialize } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-[var(--background)]">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route 
            path="/login" 
            element={user ? <Navigate to="/dashboard" /> : <Auth />} 
          />
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;