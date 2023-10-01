import React from "react";
import FeaturedProjectApi from "@/src/lib/FeaturedProjectApi";

const FeaturedProject = async () => {
    const featuredProject = await FeaturedProjectApi()

    return (
        <>
            <section>
                <div className="mb-16 max-w-md mx-auto text-center">
                    <span className="text-green-600 font-bold">Featured Project</span>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        We provide the Perfect Solution to your business growth
                    </h2>
                </div>
                {
                    featuredProject.map(project => (
                            <>
                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                    <article className="overflow-hidden rounded-lg shadow-lg">
                                        <a href="#">
                                            <img alt="Placeholder" className="block h-auto w-full" src={project.image}/>
                                        </a>
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <a className="no-underline hover:underline text-black" href={project.live}>
                                                    {project.title}
                                                </a>
                                            </h1>
                                            <p className="text-grey-darker text-sm">{project.remark}</p>
                                        </header>
                                    </article>
                                </div>
                            </>
                        )
                    )
                }

            </section>
        </>
    );
};

export default FeaturedProject;
