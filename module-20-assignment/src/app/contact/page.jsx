import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";

export default function page() {
    return (
        <main>
            <Header/>
            <Contact/>
            <NewsLetter/>
            <Footer/>
        </main>
    );
}
