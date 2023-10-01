export default async function TestimonialListApi() {
    const res = await fetch(`https://agency.teamrabbil.com/api/TestimonialList`)
    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    return res.json();
}