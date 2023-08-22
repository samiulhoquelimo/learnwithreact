import PostComponent from "@/app/components/PostComponent";
import postCategories from "@/lib/postCategories";
import postList from "@/lib/postList";

export default async function RandomPostListComponent() {
    const categories = await postCategories()
    const randomCategory = await categories[generateRandom(0, categories.length)]
    const posts = await postList(randomCategory.id)

    return (
        <>
            <br/>
            <h1 className="mb-6 text-3xl font-extrabold leading-none tracking-tight text-gray-700">
                Category: <mark
                className="p-3 text-white bg-blue-600 rounded dark:bg-blue-500">{randomCategory.name}</mark>
            </h1>
            <div className="mb-6">{posts.map((post) => (<PostComponent post={post}/>))}</div>
        </>
    );
}

function generateRandom(min = 0, max = 100) {
    let difference = max - min
    let random = Math.random()
    random = Math.floor(random * difference)
    random = random + min
    return random
}