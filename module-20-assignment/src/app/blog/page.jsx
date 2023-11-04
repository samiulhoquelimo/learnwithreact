import Action from "@/components/Action";
import Blog from "@/components/Blog";
import {PrismaClient} from "@prisma/client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";

async function getData() {
    const prisma = new PrismaClient();
    return prisma.blog.findMany({
        orderBy: {id: 'desc'}
    });
}

export default async function page() {
    const data = await getData()

    return (
        <main>
            <Header/>
            <Blog data={data}/>
            <Action/>
            <NewsLetter/>
            <Footer/>
        </main>
    );
}
