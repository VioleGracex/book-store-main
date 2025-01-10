import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-lg bg-white dark:bg-gray-900 rounded-md duration-200 w-[350px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Закажите книгу
              </h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer text-gray-600 dark:text-white"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            
            {/* Body */}
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Пожалуйста, заполните форму, чтобы заказать книгу. Мы свяжемся с вами для подтверждения заказа.
              </p>
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4 text-gray-700 dark:text-gray-200"
              />
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4 text-gray-700 dark:text-gray-200"
              />
              <input
                type="text"
                placeholder="Адрес доставки"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4 text-gray-700 dark:text-gray-200"
              />
              <textarea
                placeholder="Комментарии к заказу (необязательно)"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4 text-gray-700 dark:text-gray-200"
                rows="4"
              />
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full">
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
