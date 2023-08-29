/**
 * Redirection:
 * Implement a route that redirects the user to a different page within your application using NextResponse.redirect().
 */

import {redirect} from 'next/navigation'

export async function GET(req, res) {
    redirect('/')
}


