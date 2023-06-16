import Link from "next/link"

export default function Header() {
    return (
        <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
            <h1 className="font-bold">Showerthoughts</h1>
            <div className="grow">
                <div className="sm:hidden flex justify-end">
                    <button className="flex items-center px-3 py-2 border rounded">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="hidden sm:flex items-center justify-end gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </div>

    )
}