import {NextResponse} from "next/server";

export function middleware(req) {
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('X-Auth-Token', '12345')

    return NextResponse.next({
        request: {headers: requestHeaders}
    })
}

