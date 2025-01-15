'use client'

import Image from "next/image";
import { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import Link from "next/link";

const Signup: NextPageWithLayout = () => {
    return (
        <div className="grid lg:grid-cols-2 items-center md:px-10 h-screen bg-[#F6F7FA]">
            <div className="">
                {/* <img src="/signup-img.png" alt="Signup image" className="px-28 hidden lg:block"/> */}
                <Image src="/img/signup-img.png" alt="Signup Image" width={750} height={750} className="px-28 hidden lg:block" />
            </div>
            <div>
                <div className="text-center">
                    <h3 className="font-bold text-2xl">Create Account</h3>
                    <p>Fill in your details to get started</p>
                </div>
                <form className="flex flex-col gap-y-4 rounded-[10px] px-8 lg:px-36 pt-6 pb-8 mb-4 mx-auto">
                    <div>
                        <label className="block text-gray-700 bg-transparent px-4 border-gray-300 text-sm font-bold mb-2" htmlFor="Email">
                            Email
                        </label>
                        <input className=" appearance-none border-[2px] rounded-[10px] w-full py-3 px-3 text-gray-700 bg-transparent border-gray-300 leading-tight focus:outline-none" id="Email" type="text" placeholder="Johndoe@gmail.com" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 bg-transparent px-4 border-gray-300 text-sm font-bold mb-2" htmlFor="Phone number">
                            Phone number
                        </label>
                        <input className="appearance-none border-[2px] rounded-[10px] w-full py-3 px-3 text-gray-700 bg-transparent border-gray-300 mb-3 leading-tight focus:outline-none" id="Phone number" type="Phone number" placeholder="Input your phone number" />
                    </div>


                    <div>
                        <label className="block text-gray-700 bg-transparent px-4 border-gray-300 text-sm font-bold mb-2" htmlFor="Business name">
                            Business Name
                        </label>
                        <input className=" appearance-none border-[2px] rounded-[10px] w-full py-3 px-3 text-gray-700 bg-transparent border-gray-300 mb-3 leading-tight focus:outline-none" id="Phone number" type="Phone number" placeholder="Input your business name" />
                    </div>

                    <div className="flex items-center justify-between">
                        <Link href="/dashboard" className="bg-[#0F55BB] hover:bg-blue-700 text-white text-center py-3 rounded mt-3 w-full" role="button">
                            Create Account
                        </Link>
                    </div>
                    <div className="flex justify-between">
                        <span>Already have an account ?</span>
                        <Link href="/auth/signin" className="font-medium text-blue-700">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

Signup.getLayout = function getLayout(page: ReactElement) {
    return (
        <div>
            {page}
        </div>
    )
};

export default Signup