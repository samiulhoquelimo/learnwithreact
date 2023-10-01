import {NextResponse} from "next/server";

export async function POST(req, res) {
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('X-Auth-Token', '12345')
    
    return NextResponse.next({
        request: {headers: requestHeaders}
    })
}