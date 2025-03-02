import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/add"
              element={
                <ProtectedRoute>
                  <AddBook />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute>
                  <EditBook />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
