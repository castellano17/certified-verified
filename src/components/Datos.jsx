import React from "react";

export const Datos = () => {
  return (
    <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Certificado emitido a:</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-lg font-semibold text-blue-600">
                  Esmir Noel Roque Castellano
                </h2>
                <p className="text-xs ">
                  For succesfully completing the
                  <br />
                  <span className="font-bold">
                    Fron-End Development with React program
                  </span>
                </p>
                <p className="text-xs ">
                  date: <span className="text-gray-500">2021-09-01</span>{" "}
                </p>
                <p className="text-xs">
                  Credential ID:
                  <br />
                  <span className="text-gray-500">
                    6853e8bd-7a48-4b80-93fe-27ddcab8c779
                  </span>
                </p>

                <div className="flex justify-center">
                  <img
                    src="/src/assets/certified.png"
                    alt="logo"
                    className="w-20 h-12"
                  />
                  <img
                    src="/src/assets/verified.png"
                    alt="logo"
                    className="w-20 h-12"
                  />
                </div>

                <div className="relative flex justify-center">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1 hover:bg-blue-800">
                    <a href="https://credsverse.com/credentials/6853e8bd-7a48-4b80-93fe-27ddcab8c779">
                      Visualizar
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
