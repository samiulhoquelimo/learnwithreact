import React from 'react'
import {PrismaClient} from "@prisma/client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogDetails from '@/components/BlogDetails';

export async function getData(id) {
    const prisma = new PrismaClient();
    return prisma.blog.findUnique({where: {id: parseInt(id)}});
}

export async function generateStaticParams() {
    return [{slug: '1'}, {slug: '2'}, {slug: '3'}]
}

async function page({params}) {
    const {slug} = params
    let data = await getData(slug)

    return (
        <main>
            <Header/>
            <BlogDetails data={data}/>
            <Footer/>
        </main>
    )
}

export default page