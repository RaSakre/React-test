import { NavLink } from "react-router-dom";

// Home.tsx
const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Заголовок и описание */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Добро пожаловать!
          </h1>
        </div>

        {/* Карточки фич */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Быстро</h3>
            <p className="text-gray-600 text-sm">Высокая производительность и оптимизация</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Надежно</h3>
            <p className="text-gray-600 text-sm">TypeScript и современные практики</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Гибко</h3>
            <p className="text-gray-600 text-sm">Легко настраивается и расширяется</p>
          </div>
        </div>

        {/* Кнопки действий */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200 shadow-lg"
          >
            Смотреть товары
          </NavLink>
          <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-lg transition duration-200">
            Узнать больше
          </button>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Создано с React 18, TypeScript, Tailwind CSS и Redux Toolkit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;