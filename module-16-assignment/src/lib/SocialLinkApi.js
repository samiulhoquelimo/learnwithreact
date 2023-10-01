export default async function SocialLinkApi() {
    const res = await fetch(`https://agency.teamrabbil.com/api/SocialLink`)
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    return res.json();
}