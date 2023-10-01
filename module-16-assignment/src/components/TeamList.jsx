import React from "react";
import TeamListApi from "@/src/lib/TeamListApi";

const TeamList = async () => {
    const teamList = await TeamListApi()

    return (
        <>
            <section>
                <div className="py-20 bg-gray-50 radius-for-skewed">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-xl mx-auto mb-12 text-center">
                            <span className="text-green-600 font-bold">Our Team Member</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                                Check our awesome team members
                            </h2>
                        </div>

                        <div className="flex flex-wrap">
                            {teamList.map(team => (
                                    <>
                                        <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-3">
                                            <div className="pb-8 bg-white rounded shadow text-center overflow-hidden">
                                                <img
                                                    className="mb-8 w-full h-64 object-cover"
                                                    src={team.image}
                                                    alt=""
                                                />
                                                <h4 className="mb-2 text-2xl font-bold font-heading">
                                                    {team.name}
                                                </h4>
                                                <p className="text-gray-500">{team.bio}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamList;
