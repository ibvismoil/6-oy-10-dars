import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("auth") === "true");

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((res) => setBooks(res.data));
  }, []);

  const deleteBook = async (id) => {
    try {
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));

      await axios.delete(`http://localhost:5000/books/${id}`);
    } catch (error) {
      console.error("Ошибка при удалении книги:", error);
      alert("Не удалось удалить книгу. Попробуйте снова!");
      
      setBooks((prevBooks) => [...prevBooks, books.find((book) => book.id === id)]);
    }
  };

  return (
<div className="p-5 bg-gray-100 min-h-screen">
 <Header />
   <h2 className="text-2xl font-bold text-center mb-5">Group name</h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
       <li
          key={book.id}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between transition duration-300">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">{book.name} {book.surname}</h3>
            <p className="text-sm text-gray-600">Age: {book.age}</p>
            <p className="text-sm text-gray-600">Ball: {book.ball}</p>
           <p className="text-sm text-gray-500 italic">Date: {book.datalocal}</p>
          </div>
          {isAuthenticated && (
            <div className="flex justify-between mt-4">
              <Link to={`/edit/${book.id}`}>
                <button className="px-2 py-2 bg-[#BC8E5BF5] text-white font-medium rounded-lg transition hover:bg-[#BC8E5BF5]">
                  ✏️ Update
                </button>
              </Link>
              <button
                className="px-3 py-2 bg-[#BC8E5BF5] text-white font-medium rounded-lg transition hover:bg-[#BC8E5BJ5]"
                onClick={() => deleteBook(book.id)}>
                🗑 Delete 
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
