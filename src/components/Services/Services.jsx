import React from "react";
import Img1 from "../../assets/books/book2.jpg";
import Img2 from "../../assets/books/book1.jpg";
import Img3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "Его жизнь",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Кто там",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Потерянный мальчик",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Services = ({ handleOrderPopup }) => {
  return (
    <div className="py-10">
      <div className="container">
        <h1 className="text-3xl font-bold">Популярные книги</h1>
        <ul className="list-disc pl-6">
          {ServicesData.map((service) => (
            <li key={service.id} className="my-4">
              <div className="flex items-center gap-6">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-120 mt-4 h-32 object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                  <div className="flex gap-1 mt-2">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <button
                    className="mt-3 bg-primary text-white py-1 px-4 rounded-full"
                    onClick={handleOrderPopup}
                  >
                    Заказать сейчас
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
