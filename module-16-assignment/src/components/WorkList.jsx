import React from "react";
import WorkListApi from "@/src/lib/WorkListApi";

const WorkList = async () => {
    const workList = await WorkListApi()

    return (
        <>
            <section>
                <div className="py-20 bg-gray-50 radius-for-skewed">
                    <div className="container mx-auto px-4">
                        <div className="mb-16 max-w-md mx-auto text-center">
                            <span className="text-green-600 font-bold">Work List</span>
                            <h2 className="text-4xl md:text-5xl font-bold">
                                We provide the Perfect Solution to your business growth
                            </h2>
                        </div>

                        <div className="flex flex-wrap -mx-4">
                            {workList.map(work => (
                                <>
                                    <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-4">
                                        <h4 className="mb-4 text-2xl font-bold font-heading">
                                            {work.title}
                                        </h4>
                                        <p className="text-gray-500 leading-loose">
                                            {work.des}
                                        </p>
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

export default WorkList;
