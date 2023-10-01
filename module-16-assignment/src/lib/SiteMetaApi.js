export default async function SiteMetaApi() {
    const res = await fetch(`https://agency.teamrabbil.com/api/SiteMeta/home`)
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    return res.json();
}