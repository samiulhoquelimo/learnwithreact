import Link from 'next/link'

export default function BlogPost({post}) {
    return (
        <Link href={`blog/${post.id}`}>
            <div className="card mt-3 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl">{post.title}</h2>
                    <p className="font-light text-sm">{post.date}</p>
                </div>
            </div>
        </Link>
    )
}