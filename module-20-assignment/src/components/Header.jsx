import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <section>
            <div className="container  mx-auto">
                <nav className="flex items-center py-6">
                    <Link className="text-3xl font-semibold leading-none" href="/">
                        <img className="h-10" src="/images/logo.svg" alt="" width="auto"/>
                    </Link>
                    <div className="lg:hidden ml-auto">
                        <button
                            className="navbar-burger flex items-center py-2 px-3 text-green-600 hover:text-green-700 rounded border border-green-200 hover:border-green-300">
                            <svg
                                className="fill-current h-4 w-4"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden lg:flex items-center space-x-12 ml-auto mr-12">
                        <li>
                            <Link className="text-sm text-gray-400 hover:text-gray-500" href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm text-gray-400 hover:text-gray-500" href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm text-gray-400 hover:text-gray-500" href="/service">
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm text-gray-400 hover:text-gray-500" href="/blog">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm text-gray-400 hover:text-gray-500" href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="hidden lg:block">
                        <Link href={"/login"}
                              className="mr-2 inline-block px-4 py-3 text-xs text-green-600 hover:text-green-700 font-semibold leading-none border border-green-200 hover:border-green-300 rounded">
                            Log In
                        </Link>
                        <Link
                            className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-green-600 hover:bg-green-700 text-white rounded"
                            href="/sign-up">
                            Sign Up
                        </Link>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Header;
