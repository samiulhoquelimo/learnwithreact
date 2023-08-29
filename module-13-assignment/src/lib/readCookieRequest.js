export default async function readCookieRequest() {
    const res = await fetch(
        `http://localhost:3000/api/read-cookie`,
        {method: 'GET'}
    );
    const data = await res.json()
    console.log(data)
    return data
}