'use client'

import Image from "next/image";
import { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import Link from "next/link";

const Signin: NextPageWithLayout = () => {
    return (
        <div className="grid lg:grid-cols-2 md:px-10 items-center h-screen bg-[#F6F7FA]">
            <div className="">
                <Image src="/img/login.png" alt="Signin Image" width={700} height={700} className="px-28 hidden lg:block" />
            </div>
            <div>
                <div className="text-center">
                    <h3 className="font-bold text-2xl">Welcome back </h3>
                    <p>Sign in to continue managing your store</p>
                </div>
                <form className="flex flex-col gap-y-4 rounded-[10px] px-8 lg:px-36 pt-6 pb-8 mb-4 mx-auto">
                    <div>
                        <label className="block text-gray-700 bg-transparent px-4 border-gray-300 text-sm font-bold mb-2" htmlFor="Email">
                            Email
                        </label>
                        <input className=" appearance-none border rounded-[10px] w-full py-3 px-3 text-gray-700 bg-transparent border-gray-300 leading-tight focus:outline-none" id="Email" type="text" placeholder="Johndoe@gmail.com" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 bg-transparent px-4 border-gray-300 text-sm font-bold mb-2" htmlFor="Password">
                            Password
                        </label>
                        <input className=" appearance-none border rounded-[10px] w-full py-3 px-3 text-gray-700 bg-transparent border-gray-300 mb-3 leading-tight focus:outline-none" id="password" type="password" placeholder="Input your password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <Link href="/dashboard" className="bg-[#0F55BB] hover:bg-blue-700 text-white text-center py-3 px-4 rounded mt-3 w-full" role="button">
                            Login
                        </Link>
                    </div>
                    <div className="flex justify-between mt-5">
                        <span>Don't have an account yet ?</span>
                        <Link href="/auth/signup" className="font-medium text-blue-700">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

Signin.getLayout = function getLayout(page: ReactElement) {
    return (
        <div>
            {page}
        </div>
    )
};

export default Signin