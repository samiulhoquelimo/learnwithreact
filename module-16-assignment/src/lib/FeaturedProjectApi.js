export default async function FeaturedProjectApi() {
    const res = await fetch(`https://agency.teamrabbil.com/api/FeaturedProject`)
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    return res.json();
}