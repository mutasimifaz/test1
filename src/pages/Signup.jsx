import Layout from "./../components/layout/Layout";

const Signup = () => {
  return (
    <>
      <Layout>
        <div className="max-w-3xl bg-white md:h-[35rem] relative overflow-hidden rounded-xl md:grid md:grid-cols-5 mx-auto p-3 md:p-0 mt-5">
          <div className="absolute bg-lime-500 opacity-5 dark:opacity-30 -top-20 right-0 h-96 w-20 -rotate-45 pointer-events-none blur-3xl"></div>

          <div className=" md:col-span-2 md:m-3 overflow-hidden rounded-xl shadow-lg">
            <div className="relative text-white h-full flex flex-row md:flex-col justify-between items-center">
              <div className="hidden object-fill md:block absolute inset-0 -left-14 -bottom-[27%]">
                <img
                  className=""
                  src="https://i.ibb.co/VqbDRsb/login.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-3">
            <form className="max-w-sm mx-auto w-full">
              <div className="mb-5 mx-auto mt-20">
                <h1 className="text-xl my-5 text-gray-380 font-semibold">
                  Register
                </h1>
                <div className="mb-4">
                  <label className="block text-m font-medium text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-lime-300 dark:border-lime-600 dark:placeholder-gray-400 mb-1"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block text-m font-medium text-black">
                    Email
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-lime-300 dark:border-lime-600 dark:placeholder-gray-400 dark:text-white mb-1"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block text-m font-medium text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-lime-300 dark:border-lime-600 dark:placeholder-gray-400 mb-1"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block text-m font-medium text-black">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-lime-300 dark:border-lime-600 dark:placeholder-gray-400  mb-1"
                  ></input>
                </div>
                <input
                  type="submit"
                  id="base-input"
                  className="bg-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-lime-300 dark:border-lime-600 dark:placeholder-gray-400 dark:text-white mb-1"
                ></input>
              </div>
            </form>
            <div className="absolute bg-green-700 opacity-50 dark:opacity-30 -bottom-20 left-0 h-96 w-20 -rotate-45 pointer-events-none blur-3xl"></div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Signup;
