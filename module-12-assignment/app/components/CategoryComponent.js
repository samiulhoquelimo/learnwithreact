import postCategories from "@/lib/postCategories";
import Link from "next/link";

// Show category list from api
export default async function CategoryComponent({id}) {
    const categories = await postCategories()
    return (
        <>
            <h1 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-700">
                Category
            </h1>

            <div className="mb-6 px-6 pt-4 pb-2">
                {categories.map((category) =>
                    <span
                        key={category.id}
                        className={`${category.id == id ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'} inline-block  rounded-full px-3 py-1 text-sm text-gray-700 font-semibold mr-2 mb-2`}
                    >
                   <Link href={`/blog/${category.id}`}>{category.name}</Link>
                    </span>
                )}
            </div>
        </>
    )
}
