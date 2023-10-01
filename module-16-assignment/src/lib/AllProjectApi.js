export default async function AllProjectApi() {
    const res = await fetch(`https://agency.teamrabbil.com/api/AllProject`)
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    return res.json();
}