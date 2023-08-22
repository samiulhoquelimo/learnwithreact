import postDetails from "@/lib/postDetails";

export default async function PostDetailsComponent({id}) {
    const data = await postDetails(id)
    const post = await data.postDetails
    return (
        <>
            {post == null ? <div>
                <h1 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-700">
                    No data found
                </h1>
            </div> : <div className="container my-24 mx-auto md:px-6">
                <section className="mb-32">
                    <img src={post?.img}
                         className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image"/>

                    <h1 className="mb-6 text-3xl font-bold">
                        {post?.title}
                    </h1>

                    <p>
                        {post?.content}
                    </p>
                </section>
            </div>}
        </>
    );
}
