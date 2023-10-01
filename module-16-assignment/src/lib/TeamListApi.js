export default async function TeamListApi() {
    const res = await fetch(`https://agency.teamrabbil.com/api/TeamList`)
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    return res.json();
}