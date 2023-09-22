import React from "react";

function Contacts() {
  return (
    <>
      <div className="relative h-screen bg-contactsBg bg-cover bg-no-repeat flex items-center">
        <div className=" w-5/12 h-5/6 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 rounded-2xl ml-96">
        <img
            src="./public/images/spiderman2.png"
            alt="spiderman"
            className="h-36 w-36 mt-11 absolute"
          />
          <div className="flex">
             <img
              src="./public/images/spiderman.png"
              alt="spiderman"
              className=" h-36 w-36 mt-64 "
            /> 
            <div className="flex-col">
              <img
                src="./images/logo.png"
                className="w-32 h-28 ml-32 my-4 mt-7"
                alt="logoVGS"
              />
              <h1 className="text-purple-300 text-4xl font-bold ml-20 mb-4">
                CONTACT US
              </h1>
              <div className="w-82 h-72 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-2xl flex-col mb-5">
                <div className="flex flex-row items-center mb-4 gap-4 mt-6 pt-12 pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <h2 className="text-xl font-semibold">+39 33334234234</h2>
                </div>
                <div className="flex flex-row items-center gap-4 pt-6 pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                  <h2 className="text-xl font-semibold">
                    videogameshopper@vgs.com
                  </h2>
                </div>
                <div className="flex flex-row items-center gap-4 pt-12 pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                  <h2 className="text-xl font-semibold">
                    New York - 5th Avenue (USA)
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
