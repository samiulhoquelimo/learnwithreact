import postList from "@/lib/postList";
import PostComponent from "@/app/components/PostComponent";
import CategoryComponent from "@/app/components/CategoryComponent";

// blog posts using category id
export default async function BlogWithCategoryId({params}) {
    const id = params.id;
    const posts = await postList(id)
    return (
        <>
            <CategoryComponent id={id}/>
            <div className="mb-6">{posts.map((post) => (<PostComponent post={post}/>))}</div>
        </>
    );
}
