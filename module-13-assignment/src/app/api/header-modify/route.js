/**
 * Header Modification:
 * Create a route that accepts an incoming request with an "Authorization" header.
 * Extract the token from the header, prefix it with "Bearer ", and add it as a new "Authorization" header.
 * Use NextResponse.next() to produce the response.
 */

import {NextResponse} from "next/server";
import {headers} from "next/headers";

export async function POST(req, res) {

    const headersList = headers()
    const token = headersList.get('Authorization')

    return NextResponse.json(
        {status: true, data: {token: token}},
        {
            status: 201,
            headers: {'Authorization': `Bearer ${token}`}
        }
    )
}