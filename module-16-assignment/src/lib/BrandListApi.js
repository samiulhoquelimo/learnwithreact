export default async function BrandListApi() {
    const res = await fetch(`https://agency.teamrabbil.com/api/BrandList`)
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    return res.json();
}