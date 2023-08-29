/**
 * Setting Cookies:
 * Create a Next.js project using version 13.
 * Implement a route that sets a cookie when a user clicks a button.
 * The cookie should store a user preference, e.g., "theme: dark" or "language: en".
 */

import setCookieRequest from "@/lib/setCookieRequest";

export default async function SetCookie() {
    const data = await setCookieRequest()

    return (
        <>
            <div>
                {JSON.stringify(data)}
            </div>
        </>
    )
}


