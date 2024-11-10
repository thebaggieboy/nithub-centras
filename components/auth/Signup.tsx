import Image from "next/image";
const Signup = () => {
  return (
    <div className="grid lg:grid-cols-2 py-24 md:px-10 h-screen bg-[#F6F7FA]">
        <div className="">
            {/* <img src="/signup-img.png" alt="Signup image" className="px-28 hidden lg:block"/> */}
            <Image src="/img/signup-img.png" alt="Signup Image" width={750} height={750} className="px-28 hidden lg:block" />
        </div>
        <div>
            <div className="text-center">
                <h3 className="font-bold text-2xl">Create Account</h3>
                <p>Fill in your details to get started</p>
            </div>
            <form className=" rounded-[10px] px-8 lg:px-36 pt-6 pb-8 mb-4 mx-auto">
                <div className="mb-4 mt-5">
                <label className="block text-gray-700 bg-transparent px-4 border-gray-300 text-sm font-bold mb-2" htmlFor="Email">
                    Email
                </label>
                <input className=" appearance-none border-[2px] rounded-[10px] w-full py-4 px-3 text-gray-700 bg-transparent border-gray-300 leading-tight focus:outline-none" id="Email" type="text" placeholder="Johndoe@gmail.com" required/>
                </div>
                <div className="mb-6 mt-8">
                <label className="block text-gray-700 bg-transparent px-4 border-gray-300 text-sm font-bold mb-2" htmlFor="Phone number">
                    Phone number
                </label>
                <input className=" appearance-none border-[2px] rounded-[10px] w-full py-4 px-3 text-gray-700 bg-transparent border-gray-300 mb-3 leading-tight focus:outline-none" id="Phone number" type="Phone number" placeholder="Input your phone number" />
                </div>
                <div className="mb-6 mt-5">
                <label className="block text-gray-700 bg-transparent px-4 border-gray-300 text-sm font-bold mb-2" htmlFor="Business name">
                    Business Name
                </label>
                <input className=" appearance-none border-[2px] rounded-[10px] w-full py-4 px-3 text-gray-700 bg-transparent border-gray-300 mb-3 leading-tight focus:outline-none" id="Phone number" type="Phone number" placeholder="Input your business name" />
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-[#0F55BB] hover:bg-blue-700 text-white py-4 px-4 rounded mt-5  focus:outline-none w-full" type="button">
                    Create Account
                </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup