import React from "react";
import AllProjectApi from "@/src/lib/AllProjectApi";

const Project = async () => {
    const allProject = await AllProjectApi()

    return (
        <>
            <section>
                <div className="py-20 bg-gray-50 radius-for-skewed">
                    <div className="container mx-auto px-4">
                        <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
                            <div className="text-center lg:text-left">
                                <span className="text-green-600 font-bold">Dolor sit amet consectutar</span>
                                <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                                    All Projects
                                </h2>
                            </div>
                            <a
                                className="hidden md:inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
                                href="#"
                            >
                                View More Projects
                            </a>
                        </div>

                        <div className="flex flex-wrap -mx-4 mb-4">
                            {allProject.map(project => (
                                <>
                                    <div className="mb-8 w-full md:w-1/2 lg:w-1/3 px-4">
                                        <div className="bg-white rounded">
                                            <img
                                                className="rounded-t object-cover h-128"
                                                src={project.image}
                                                alt=""
                                            />
                                            <div className="p-6">
                                                <span className="text-gray-400">{project.remark}</span>
                                                <h3 className="mb-4 text-2xl font-bold font-heading">
                                                    {project.title}
                                                </h3>
                                                <a
                                                    className="flex text-green-600 hover:text-green-700 font-bold"
                                                    href={project.live}
                                                >
                                                    <span>View Case Study</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
