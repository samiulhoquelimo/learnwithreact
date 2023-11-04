"use client";

import Header from "@/components/Header";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

export default function page() {
    return (
        <main>
            <Header/>
            <PrivacyPolicy/>
            <NewsLetter/>
            <Footer/>
        </main>
    );
}
