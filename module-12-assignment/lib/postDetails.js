export default async function postDetails(id) {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`)
    if (!res.ok) {
        throw new Error("Error fetching post details");
    }
    return res.json();
}
