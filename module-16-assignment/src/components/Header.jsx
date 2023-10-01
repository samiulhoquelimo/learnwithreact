import Link from "next/link";

function Header() {
    return (
        <section className="relative bg-[#D7F5DC]">
            <div className="container mx-auto">
                <nav className="relative px-6 py-6 flex justify-between items-center z-10">
                    <Link className="text-3xl font-bold leading-none" href="/">
                        <img src="assets/DesignAGENCY.svg" className="h-12" alt="" width="150" height="45"/>
                    </Link>
                    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
                        <li><Link href="/" className="text-sm text-green-600 font-bold">Home</Link></li>
                        <li><Link href="/team" className="text-sm text-green-600 font-bold">Team</Link></li>
                        <li><Link href="/service" className="text-sm text-green-600 font-bold">Service</Link></li>
                        <li><Link href="/projects" className="text-sm text-green-600 font-bold">Projects</Link></li>
                        <li><Link href="/testimonials" className="text-sm text-green-600 font-bold">Testimonials</Link>
                        </li>
                    </ul>
                    <a href="/login"
                       className="hidden lg:inline-block py-4 px-6 bg-green-100 hover:bg-green-500 text-sm text-green-600 hover:text-white font-bold rounded-l-xl rounded-t-xl transition duration-200">
                        Login
                    </a>
                </nav>
            </div>
        </section>
    );
}

export default Header;
