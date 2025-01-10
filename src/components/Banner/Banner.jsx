import React from "react";
// import BooksStack from "../../assets/website/books-stack.png";
import BooksStack from "../../assets/website/library.jpg";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Diagonal Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-orange-500 transform -skew-y-6 -z-10"></div>

              {/* Image Section */}
              <div className="transform rotate-6 transition-transform hover:rotate-3 duration-300">
                <img
                  src={BooksStack}
                  alt="изображение библиотеки"
                  className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-2xl object-cover"
                />
              </div>

              {/* Text Content Section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg">
                  Библиотека у вас под рукой
                </h1>
                <p className="text-sm text-white tracking-wide leading-5 opacity-80">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                </p>
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6">
                  {/* Icon + Text Cards with Hover Effect */}
                  <div className="flex items-center gap-4 bg-purple-800  p-4 rounded-xl transition duration-300">
                    <GrSecure className="text-4xl h-12 w-12 shadow-lg p-4 rounded-full bg-violet-100 dark:text-black" />
                    <p className="text-lg  text-white font-medium">
                      Качественные книги
                    </p>
                  </div>
                  <div className="flex items-center gap-4 bg-orange-700  p-4 rounded-xl transition duration-300">
                    <IoFastFood className="text-4xl h-12 w-12 shadow-lg p-4 rounded-full bg-orange-100 dark:text-black" />
                    <p className="text-lg text-white font-medium">
                      Быстрая доставка
                    </p>
                  </div>
                  <div className="flex items-center gap-4 bg-green-700  p-4 rounded-xl transition duration-300">
                    <GiFoodTruck className="text-4xl  h-12 w-12 shadow-lg p-4 rounded-full bg-green-100 dark:text-black" />
                    <p className="text-lg text-white font-medium">
                      Удобные способы оплаты
                    </p>
                  </div>
                  <div className="flex items-center gap-4 bg-yellow-700  p-4 rounded-xl transition duration-300">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-lg p-4 rounded-full bg-yellow-100 dark:text-black" />
                    <p className="text-lg text-white font-medium">
                      Скидки на книги
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
