export default async function StatListApi() {
    const res = await fetch(`https://agency.teamrabbil.com/api/StatList`)
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    return res.json();
}