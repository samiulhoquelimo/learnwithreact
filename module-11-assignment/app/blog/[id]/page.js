import blogData from "../../../data/blogData.json";

export default async function SingleBlog({params}) {

    const blogs = blogData;
    const blog = blogs.find((blog) => blog.id == params.id)

    return (
        <article className="min-h-screen">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="text-center font-medium leading-7 text-gray-500">
                        {blog?.date}
                    </div>
                    <div
                        className="text-center font-extrabold text-gray-800 text-6xl">
                        {blog?.title}
                    </div>
                    <br/>
                    <div className="px-6 text-3xl font-normal leading-9 tracking-tight text-gray-600 sm:text-3xl">
                        {blog?.content}
                    </div>
                </div>
            </div>
        </article>
    );
}