import PostDetailsComponent from "@/app/components/PostDetailsComponent";

export default async function SingleBlogWithPostId({params}) {
    const id = params.id;
    return (
        <>
            <PostDetailsComponent id={id}/>
        </>
    );
}
