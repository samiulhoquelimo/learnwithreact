export default async function postCategories() {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-categories`)
    if (!res.ok) {
        throw new Error("Error fetching post category");
    }
    return res.json();
}
