export default async function HeroListApi() {
    const res = await fetch(`https://agency.teamrabbil.com/api/HeroList`)
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    return res.json();
}