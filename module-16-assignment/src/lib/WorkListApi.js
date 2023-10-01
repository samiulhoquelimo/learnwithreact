export default async function WorkListApi() {
    const res = await fetch(`https://agency.teamrabbil.com/api/WorkList`)
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    return res.json();
}