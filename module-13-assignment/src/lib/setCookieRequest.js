export default async function setCookieRequest() {
    const res = await fetch(
        `http://localhost:3000/api/set-cookie`,
        {method: 'POST'}
    );
    const data = await res.json()
    console.log(data)
    return data
}

