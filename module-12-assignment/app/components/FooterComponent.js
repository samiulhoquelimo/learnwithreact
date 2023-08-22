export default function FooterComponent() {
    return (
        <>
            <hr className="border-gray-200 dark:border-gray-600"/>
            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="https://ostad.app/" target="_blank" className="hover:underline">Ostad™</a>. All Rights Reserved.</span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="/blog" className="mr-4 hover:underline md:mr-6 ">Blog</a>
                        </li>
                        <li>
                            <a href="/about" className="mr-4 hover:underline md:mr-6">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="mr-4 hover:underline md:mr-6">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
