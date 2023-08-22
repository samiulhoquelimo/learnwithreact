import NewestPostComponent from "@/app/components/NewestPostComponent";
import CategoryComponent from "@/app/components/CategoryComponent";
import RandomPostListComponent from "@/app/components/RandomPostListComponent";

export default function Home() {
    // home page have 3 section + header & footer section. But in one section you have to show blog items using the api.
    // 3 section =>
    // CategoryComponent=> to show categories
    // NewestPostComponent=> to show latest post
    // RandomPostListComponent=> to show random category's all post
    return (
        <div>
            <CategoryComponent/>
            <NewestPostComponent/>
            <RandomPostListComponent/>
        </div>
    )
}
