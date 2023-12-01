import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginForm';
import FormDetails from './components/FormDetail'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/formDetails' element={<FormDetails />} />
        </Routes>
      </Router>
    </div>
  )
}
