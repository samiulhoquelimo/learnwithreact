/**
 * Reading Cookies:
 * Implement another route that reads the user's preference cookie and displays it on the page.
 */

import {NextResponse} from "next/server";
import {cookies} from "next/headers";

export async function GET(req, res) {
    const cookieStore = cookies()
    const theme = cookieStore.get('theme')
    const language = cookieStore.get('language')

    return NextResponse.json({
        theme: theme.value,
        language: language.value
    })
}