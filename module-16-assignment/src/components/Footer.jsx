import React from "react";

const Footer = () => {
    return (
        <>
            <section>
                <div className="py-20 bg-gray-200 radius-for-skewed">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
                                <a
                                    className="inline-block mb-3 text-3xl font-bold leading-none"
                                    href="#"
                                >
                                    <img
                                        className="h-12"
                                        src="assets/DesignAGENCY.svg"
                                        alt=""
                                        width="auto"
                                    />
                                </a>
                                <p className="mb-4 max-w-sm text-gray-400 leading-loose">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus tincidunt felis eu est.
                                </p>
                                <div>
                                    <a
                                        className="inline-block w-10 mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                                        href="#"
                                    >
                                        <img
                                            className="mx-auto"
                                            src="assets/facebook.svg"
                                        />
                                    </a>
                                    <a
                                        className="inline-block w-10 mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                                        href="#"
                                    >
                                        <img
                                            className="mx-auto"
                                            src="assets/linkedin.svg"
                                        />
                                    </a>
                                    <a
                                        className="inline-block w-10 mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                                        href="#"
                                    >
                                        <img
                                            className="mx-auto"
                                            src="assets/twitter.svg"
                                        />
                                    </a>
                                    <a
                                        className="inline-block w-10 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                                        href="#"
                                    >
                                        <img
                                            className="mx-auto"
                                            src="assets/instagram.svg"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-between">
                                <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                                    <h3 className="mb-6 text-2xl font-bold">Quick Links</h3>
                                    <ul>
                                        <li className="mb-4">
                                            <a className="text-gray-800 hover:text-gray-600" href="#">
                                                Services
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a className="text-gray-800 hover:text-gray-600" href="#">
                                                Portfolio
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a className="text-gray-800 hover:text-gray-600" href="#">
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-gray-800 hover:text-gray-600" href="#">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-auto">
                                    <h3 className="mb-6 text-2xl font-bold">Address</h3>
                                    <ul>
                                        <li className="mb-4">
                                            <a className="text-gray-800 hover:text-gray-600" href="#">
                                                Design Agency Head Office.
                                                Airport Road
                                                United Arab Emirate
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p className="lg:text-center text-sm text-gray-400 border-t border-gray-100 pt-12 mt-16">
                            © Copyright Design Agency 2022
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
