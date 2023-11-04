import Action from "@/components/Action";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Price from "@/components/Price";
import Service from "@/components/Service";
import {PrismaClient} from "@prisma/client";

async function getData() {
    const prisma = new PrismaClient();
    let blogs = await prisma.service.findMany({
        orderBy: {id: 'desc'}
    })

    return blogs
}

export default async function page() {
    const data = await getData()
    return (
        <main>
            <Header/>
            <Service data={data}/>
            <Price/>
            <Action/>
            <NewsLetter/>
            <Footer/>
        </main>
    );
}
