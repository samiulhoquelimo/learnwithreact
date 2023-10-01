export default async function AllServiceApi() {
    const res = await fetch(`https://agency.teamrabbil.com/api/AllService`)
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    return res.json();
}