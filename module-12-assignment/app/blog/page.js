import CategoryComponent from "@/app/components/CategoryComponent";

export default function Blog() {
    // blog page have 1 section + header & footer section. And this section you have to show blog items using the api.
    return (
        <>
            <CategoryComponent/>

            <h1 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-700">
                Please select category to see the posts
            </h1>
        </>
    )
}
