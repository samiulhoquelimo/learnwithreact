export default async function postList(id) {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-list/${id}`)
    if (!res.ok) {
        throw new Error("Error fetching post list");
    }
    return res.json();
}
