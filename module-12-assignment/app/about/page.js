import AboutHighlightComponent from "@/app/components/AboutHighlightComponent";
import AboutDetailsComponent from "@/app/components/AboutDetailsComponent";

// About page
export default function About() {
    // about page have 2 section + header & footer section.
    // AboutDetailsComponent+AboutHighlightComponent
    return (
        <>
            <AboutDetailsComponent/>
            <AboutHighlightComponent/>
        </>
    )
}
