import './globals.css'
import {Inter} from 'next/font/google'
import "react-quill/dist/quill.snow.css";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Blog Magazine',
    description: 'Blog Magazine for Next Module 20 assignment',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
