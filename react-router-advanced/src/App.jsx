import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <button
        onClick={() => setIsAuthenticated(!isAuthenticated)}
        style={{ margin: "10px" }}
      >
        {isAuthenticated ? "Logout" : "Login"}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Route */}
        <Route
  path="/profile/*"
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Profile />
    </ProtectedRoute>
  }
/>
          {/* Nested Routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
