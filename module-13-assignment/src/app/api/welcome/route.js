/**
 * JSON Response:
 * Create a route that returns a JSON response with the following data:
 * {
 *  "message": "Welcome to our API!",
 *  "version": "1.0"
 * }
 */

import {NextResponse} from "next/server";

export async function GET(req, res) {
    const message = "Welcome to our API!"
    const version = "1.0"

    return NextResponse.json({
        message: message,
        version: version
    })
}