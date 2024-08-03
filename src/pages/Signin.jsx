const Signin = () => {
  return (
    <div>
      <div className="max-w-3xl md:h-[35rem] dark:bg-gradient-to-b dark:from-green-500 dark:to-green-600 bg-white relative overflow-hidden shadow-2xl rounded-xl md:grid md:grid-cols-5 mx-auto p-3 md:p-0">
        <div className="transform translate-y-0 opacity-100 transition-all duration-300 md:col-span-2 md:m-3 overflow-hidden rounded-xl dark:bg-green-700 bg-green-900 bg-opacity-80 bg-pattern-lines dark:bg-opacity-50 shadow-lg">
          <div className="relative text-white h-full flex flex-row md:flex-col justify-between items-center">
            <div className="hidden object-fill pointer-events-none md:block absolute inset-0 -left-14 -bottom-[27%]">
              <img
                className=""
                src="https://i.ibb.co/VqbDRsb/login.jpg"
                alt=""
              />
            </div>
            <h1 className="text-xl md:hidden pr-6">Register</h1>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-3">
          <form className="max-w-sm mx-auto w-full">
            <div className="mb-5 mx-auto mt-20">
              <h1 className="text-xl my-5 text-gray-300 font-semibold">
                Register
              </h1>

              <div className="mb-4">
                <label className="block text-m font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-lime-300 dark:border-lime-600 dark:placeholder-gray-400 dark:text-white mb-1"
                ></input>
              </div>
              <div className="mb-4">
                <label className="block text-m font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-lime-300 dark:border-lime-600 dark:placeholder-gray-400 dark:text-white mb-1"
                ></input>
              </div>

              <input
                type="submit"
                id="base-input"
                className="bg-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-blue-300 dark:border-lime-600 dark:placeholder-gray-400 dark:text-white mb-1"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
