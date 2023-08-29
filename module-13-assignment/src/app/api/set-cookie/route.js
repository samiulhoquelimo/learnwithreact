/**
 * Setting Cookies:
 * Create a Next.js project using version 13.
 * Implement a route that sets a cookie when a user clicks a button.
 * The cookie should store a user preference, e.g., "theme: dark" or "language: en".
 */

import {NextResponse} from "next/server";

export async function POST(req, res) {
    const language = "en"
    const theme = "dark"

    return NextResponse.json(
        {status: true, data: {language: language, theme: theme}},
        {
            status: 201,
            headers: {'Set-Cookie': `language=${language}; theme=${theme};`},
        }
    )
}