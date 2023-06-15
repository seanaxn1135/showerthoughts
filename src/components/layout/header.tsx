import Link from "next/link"

export default function Header() {
    return (
        <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
            <h1 className="font-bold">Showerthoughts</h1>
            <div className="grow">
                <div className="flex items-center justify-end gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>

                </div>
            </div>
        </div>

    )
}