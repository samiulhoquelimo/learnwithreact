export default async function CreateContactApi() {
    const res = await fetch(`https://agency.teamrabbil.com/api/CreateContact`)
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    return res.json();
}