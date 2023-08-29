export default async function welcomeRequest() {
    const res = await fetch(
        `http://localhost:3000/api/welcome`,
        {method: 'GET'}
    );
    const data = await res.json()
    console.log(data)
    return data
}