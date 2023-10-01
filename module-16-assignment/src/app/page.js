import Hero from "@/src/components/Hero";
import Brand from "@/src/components/Brand";
import WorkList from "@/src/components/WorkList";
import FeaturedProject from "@/src/components/FeaturedProject";
import Subscribe from "@/src/components/Subscribe";

function StatList() {
    return null;
}

export default function Home() {
    return (
        <>
            <Hero/>
            <Brand/>
            <WorkList/>
            <StatList/>
            <FeaturedProject/>
            <Subscribe/>
        </>
    )
}
