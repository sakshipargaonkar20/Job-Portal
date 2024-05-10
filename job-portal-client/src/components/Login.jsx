import React from "react";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-green-500">
      <div className="md:flex md:items-center md:justify-between w-full md:w-2/3 lg:w-1/2">
        <div className="text-center md:text-left mb-8 md:mb-0 text-white md:w-1/2">
          <h1 className="my-5 text-5xl font-bold tracking-tight">
            The best offer <br />
            <span className="text-gray-300">for your business</span>
          </h1>

          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </div>

        <div className="relative w-full md:w-1/2">
          <div
            id="radius-shape-1"
            className="absolute rounded-circle shadow-5"
          ></div>
          <div id="radius-shape-2" className="absolute shadow-5"></div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4 grid grid-cols-2 gap-4">
              <input
                className="border-b-2 p-2 outline-none focus:border-blue-500"
                placeholder="First name"
                type="text"
              />
              <input
                className="border-b-2 p-2 outline-none focus:border-blue-500"
                placeholder="Last name"
                type="text"
              />
            </div>

            <input
              className="mb-4 border-b-2 p-2 outline-none focus:border-blue-500"
              placeholder="Email"
              type="email"
            />
            <input
              className="mb-4 border-b-2 p-2 outline-none focus:border-blue-500"
              placeholder="Password"
              type="password"
            />

            <div className="flex items-center mb-4">
              <input id="flexCheckDefault" type="checkbox" className="mr-2" />
              <label htmlFor="flexCheckDefault" className="text-gray-500">
                Subscribe to our newsletter
              </label>
            </div>

            <button className="w-full mb-4 bg-blue-500 text-white py-2 rounded-md">
              Login
            </button>

            <div className="text-center">
              <p>or sign up with:</p>

              <button className="mx-3 text-blue-500">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18s2-1 2-3v-3h3v-3h-3v-2c0-1.207-.354-2.404-1.002-3.398A3.94 3.94 0 0 0 10 3a3.978 3.978 0 0 0-2.827 1.17A4.004 4.004 0 0 0 6 9v2H3v3h3v3c0 2 3 2 3 0v-2h3zm-2-2h2v-3h3v-2h-3V9H8V6c0-1.667 1.333-3 3-3s3 1.333 3 3v3h3l-3 1.5L10 9V6c0-.19.034-.373.088-.54A1.5 1.5 0 0 0 10 4a1.5 1.5 0 0 0-1.088.46c.054.167.088.35.088.54v3H6v3h2v2z"></path>
                </svg>
              </button>

              <button className="mx-3 text-blue-500">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M19.442 6.037c-.579.26-1.196.437-1.836.515a3.28 3.28 0 0 0 1.452-1.842 6.55 6.55 0 0 1-2.082.796 3.277 3.277 0 0 0-5.584 2.983 9.286 9.286 0 0 1-6.732-3.417 3.28 3.28 0 0 0 1.015 4.374 3.25 3.25 0 0 1-1.487-.41c-.001.029-.001.058-.001.087a3.278 3.278 0 0 0 2.633 3.219 3.292 3.292 0 0 1-1.482.056 3.278 3.278 0 0 0 3.065 2.279A6.592 6.592 0 0 1 2 13.52a9.26 9.26 0 0 0 4.98 1.457c6.037 0 9.34-5 9.34-9.34 0-.142-.003-.284-.009-.425a6.685 6.685 0 0 0 1.651-1.711"></path>
                </svg>
              </button>

              <button className="mx-3 text-blue-500">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18c-1.064 0-2.109-.133-3.134-.378-.1-.019-.2-.046-.297-.077a8.716 8.716 0 0 0 7.056 3.662c5.324 0 9.634-4.325 9.634-9.662 0-.147-.004-.292-.01-.437.661-.478 1.232-1.077 1.681-1.758a9.356 9.356 0 0 1-2.534.692 4.616 4.616 0 0 0 2.047-2.55 9.207 9.207 0 0 1-2.943 1.125 4.61 4.61 0 0 0-7.79 4.188 13.093 13.093 0 0 1-9.499-4.811 4.607 4.607 0 0 0 1.42 6.143 4.575 4.575 0 0 1-2.086-.575v.057c0 2.55 1.813 4.674 4.217 5.155a4.647 4.647 0 0 1-2.079.078 4.615 4.615 0 0 0 4.317 3.204"></path>
                </svg>
              </button>

              <button className="mx-3 text-blue-500">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M19 10.738a8.291 8.291 0 0 1-2.386.653 4.144 4.144 0 0 0 1.827-2.312 8.278 8.278 0 0 1-2.625.984 4.144 4.144 0 0 0-7.041 3.77 11.765 11.765 0 0 1-8.547-4.334A4.14 4.14 0 0 0 .77 11.075a4.127 4.127 0 0 0 1.823 3.436A4.133 4.133 0 0 1 .778 15c0 2.3 1.853 4.161 4.134 4.161 1.958 0 3.544-1.365 3.941-3.184 2.912-.134 6.29-1.487 8.209-3.806a4.131 4.131 0 0 0 1.743-.023 4.15 4.15 0 0 0 3.893-4.154v-.007a4.152 4.152 0 0 0-1.163-2.923A4.13 4.13 0 0 0 19 10.737zM13.006 5.7a3.752 3.752 0 0 1 1.076 2.657c0 2.072-1.678 3.751-3.75 3.751-1.367 0-2.6-.591-3.45-1.525a5.248 5.248 0 0 0-3.07-.974 5.264 5.264 0 0 0-4.61 2.75 5.289 5.289 0 0 0-.496 2.25 5.317 5.317 0 0 0 5.318 5.317 5.285 5.285 0 0 0 4.777-2.983h-.007c.872.504 1.879.804 2.95.804 2.075 0 3.96-.863 5.3-2.249a3.741 3.741 0 0 1-.887.111 3.753 3.753 0 0 1-3.75-3.75 3.753 3.753 0 0 1 3.75-3.75zM10 0C4.482 0 0 4.482 0 10s4.482 10 10 10 10-4.482 10-10S15.518 0 10 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
