import PostComponent from "@/app/components/PostComponent";
import postNewest from "@/lib/postNewest";

export default async function NewestPostComponent() {
    const posts = await postNewest()

    return (
        <>
            <h1 className="mb-6 text-3xl font-extrabold leading-none tracking-tight text-gray-700">
                Newest Post
            </h1>
            <div>{posts.map((post) => (<PostComponent post={post}/>))}</div>
        </>
    );
}
