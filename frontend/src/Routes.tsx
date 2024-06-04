import React from 'react'
import { Route, Routes as Router } from 'react-router-dom'
import Home from './pages/auth/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import ProtectedRoute from './components/ProtectedRoute'
import User from './pages/auth/User'

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/user" element={<User />} />
      </Route>
    </Router>
  )
}

export default Routes
