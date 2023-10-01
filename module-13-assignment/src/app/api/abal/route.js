import {NextResponse} from "next/server";

export async function POST(req, res) {
    return NextResponse.json(
        {status: true, message: "success"},
        {
            status: 201,
            headers: {'Set-Cookie': `user-token=abc123;`}
        }
    )
}