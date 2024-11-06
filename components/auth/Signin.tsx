import Image from "next/image";
const Signin = () => {
    return (
      <div className="grid lg:grid-cols-2 py-24 md:px-10 items-center h-screen bg-[#F6F7FA]">
          <div className="">
              {/* <img src="/login.png" alt="Signup image" className="px-28 hidden lg:block"/> */}
              <Image src="/img/login.png" alt="Signin Image" width={700} height={700} className="px-28 hidden lg:block" />
          </div>
          <div>
              <div className="text-center">
                  <h3 className="font-bold text-2xl">Welcome back </h3>
                  <p>Sign in to continue managing your store</p>
              </div>
              <form className=" rounded-[10px] px-8 lg:px-36 pt-6 pb-8 mb-4 mx-auto">
                  <div className="mb-4 mt-5">
                  <label className="block text-gray-700 bg-transparent px-4 border-gray-300 text-sm font-bold mb-2" htmlFor="Email">
                      Email
                  </label>
                  <input className=" appearance-none border rounded-[10px] w-full py-3 px-3 text-gray-700 bg-transparent border-gray-300 leading-tight focus:outline-none" id="Email" type="text" placeholder="Johndoe@gmail.com" required/>
                  </div>
                  <div className="mb-6 mt-8">
                  <label className="block text-gray-700 bg-transparent px-4 border-gray-300 text-sm font-bold mb-2" htmlFor="Password">
                      Password
                  </label>
                  <input className=" appearance-none border rounded-[10px] w-full py-3 px-3 text-gray-700 bg-transparent border-gray-300 mb-3 leading-tight focus:outline-none" id="password" type="password" placeholder="Input your password" />
                  </div>
                  <div className="flex items-center justify-between">
                  <button className="bg-[#0F55BB] hover:bg-blue-700 text-white py-3 px-4 rounded mt-5  focus:outline-none w-full" type="button">
                      Login
                  </button>
                  </div>
              </form>
          </div>
      </div>
    )
  }
  
  export default Signin