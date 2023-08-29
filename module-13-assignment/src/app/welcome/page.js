/**
 * JSON Response:
 * Create a route that returns a JSON response with the following data:
 * {
 *  "message": "Welcome to our API!",
 *  "version": "1.0"
 * }
 */

import welcomeRequest from "@/lib/welcomeRequest";

export default async function Welcome() {
    const data = await welcomeRequest()

    return (<>{JSON.stringify(data)}</>)
}


