import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Кто там",
    rating: 5.0,
    author: "Кто-то",
  },
  {
    id: 2,
    img: Book2,
    title: "Его жизнь",
    rating: 4.5,
    author: "Джон",
  },
  {
    id: 3,
    img: Book3,
    title: "Потерянные мальчики",
    rating: 4.7,
    author: "Потерянная девочка",
  },
  {
    id: 4,
    img: Book2,
    title: "Его жизнь",
    rating: 4.4,
    author: "Кто-то",
  },
  {
    id: 5,
    img: Book1,
    title: "Кто там",
    rating: 4.5,
    author: "Кто-то",
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Топ книги для вас
            </p>
            <h1 className="text-3xl font-bold">Лучшие книги</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
                Посмотреть все книги
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
