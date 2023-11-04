import About from "@/components/About";
import Action from "@/components/Action";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Team from "@/components/Team";

export default function page() {
    return (
        <main>
            <Header/>
            <About/>
            <Counter/>
            <Team/>
            <Action/>
            <NewsLetter/>
            <Footer/>
        </main>
    );
}
