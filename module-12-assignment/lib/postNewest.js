export default async function postNewest() {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-newest`)
    if (!res.ok) {
        throw new Error("Error fetching post newest");
    }
    return res.json();
}
