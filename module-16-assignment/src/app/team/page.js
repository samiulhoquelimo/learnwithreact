import {Camp} from "@/src/components/Camp";
import TeamList from "@/src/components/TeamList";
import Subscribe from "@/src/components/Subscribe";

export default function Team() {
    return (
        <>
            <Camp title={"Team"}/>
            <TeamList/>
            <Subscribe/>
        </>
    )
}
