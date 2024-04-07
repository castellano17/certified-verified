import { useState } from "react";
import "./App.css";
import { Datos } from "./components/Datos";
import ImagenVerified from "./components/ImagenVerified";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Opens+Sans:300,400,700,900&display=swap"
        rel="stylesheet"
      />

      <main className="bg-white font-open-sans">
        <header className="h-24 sm:h-32 flex items-center">
          <div className="container mx-auto pl-8 flex items-center justify-between">
            <div className="uppercase text-blue-700 flex flex-col items-center">
              <div className="text-2xl">
                <a href="#">
                  <img
                    src="img/logoCodex.png"
                    alt="logo"
                    className="w-23 h-20 cursor-pointer"
                  />
                </a>
              </div>
              <small className="tracking-widest">
                Verificación de Certificados
              </small>
            </div>
            <div className="flex items-center">
              <nav className="text-gray-900 tracking-widest text-sm font-bold lg:flex items-center hidden uppercase">
                <a href="#" className="py-2 px-8 hover:underline">
                  Home
                </a>

                <a href="#" className="py-2 px-8 hover:underline">
                  FAQ
                </a>
              </nav>
              <button
                className="ml-4 w-6 h-6 flex flex-col lg:hidden mr-8"
                onClick={toggleMenu}
              >
                <span className="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                <span className="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                <span className="w-6 h-px bg-gray-900 mb-1 rounded"></span>
              </button>
              {isOpen && (
                <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl">
                  <div className="flex justify-end pr-3 text-lg font-semibold">
                    <button onClick={toggleMenu}>X</button>
                  </div>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    FAQ
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>
        <div className="container mx-auto px-8 py-8 lg:pb-40 relative flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <Datos />
          </div>
          <div className="w-full sm:w-2/3 lg:absolute top-0 right-0 bottom-0 mt-0 lg:mr-8">
            <ImagenVerified />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
