import BlogPost from "@/app/components/BlogPost";
import blogData from "../../data/blogData.json";

export default async function Blog() {
    const blogs = blogData;

    return (
        <div>
            <main className="flex min-h-screen content-center flex-col justify-between text-3xl">
                <div>
                    <h1 className="font-bold text-lg">Blog Posts</h1>
                    <div className="mt-5">
                        {blogs.map((blog) => <BlogPost post={blog}/>)}
                    </div>
                </div>
            </main>
        </div>
    )
}