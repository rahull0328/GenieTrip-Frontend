import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// pages
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import LandingPage from './pages/Shared/LandingPage';
import Dashboard from './pages/Home/Dashboard';
import UserProvider from './context/userContext';
import InterviewPrep from './pages/InterviewPrep/InterviewPrep';

function App() {

  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            {/* default route */}
            <Route path="/" element={<LandingPage />} />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/interview-prep/:sessionId' element={<InterviewPrep />} />
          </Routes>
        </Router>

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        />
      </div>
    </UserProvider>
  )
}

export default App
