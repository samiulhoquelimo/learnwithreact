"use client";

import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";
import TermsAndConditions from "@/components/TermsAndConditions";

export default function page() {
    return (
        <main>
            <Header/>
            <TermsAndConditions/>
            <NewsLetter/>
            <Footer/>
        </main>
    );
}
