import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("auth") === "true");

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((res) => setBooks(res.data));
  }, []);

  const deleteBook = (id) => {
    axios.delete(`http://localhost:5000/books/${id}`).then(() => {
      setBooks(books.filter((book) => book.id !== id));
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-5">📚 Список книг</h2>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <li 
            key={book.id} 
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between transition duration-300 transform hover:scale-105"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{book.name} {book.surname}</h3>
              <p className="text-sm text-gray-600">Возраст: {book.age}</p>
              <p className="text-sm text-gray-600">Баллы: {book.ball}</p>
              <p className="text-sm text-gray-500 italic">Дата: {book.datalocal}</p>
            </div>

            {isAuthenticated && (
              <div className="flex justify-between mt-4">
                <Link to={`/edit/${book.id}`}>
                  <button className="px-4 py-2 bg-yellow-400 text-black font-medium rounded-lg transition hover:bg-yellow-500">
                    ✏️ Редактировать
                  </button>
                </Link>
                <button 
                  className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg transition hover:bg-red-600" 
                  onClick={() => deleteBook(book.id)}
                >
                  🗑 Удалить
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
