import React from "react";
import BrandListApi from "@/src/lib/BrandListApi";

const Brand = async () => {
    const brandList = await BrandListApi()

    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-2">
                        {brandList.map(brand => (
                            <>
                                <div className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
                                    <div className="py-16 bg-gray-50 rounded">
                                        <a href="#">
                                            <img src={brand.image} className="mx-auto h-8" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Brand;
