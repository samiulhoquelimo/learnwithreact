/**
 * Reading Cookies:
 * Implement another route that reads the user's preference cookie and displays it on the page.
 */

import readCookieRequest from "@/lib/readCookieRequest";

export default async function ReadCookie() {
    const data = await readCookieRequest()

    return (
        <>
            <div>
                {JSON.stringify(data)}
            </div>
        </>
    )
}