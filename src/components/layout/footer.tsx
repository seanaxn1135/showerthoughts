
export default function Footer() {
    return (
        <footer className="bg-light border-t-2 border-solid border-dark font-medium text-lg">
            <div className="py-8 flex items-center justify-center h-full">
                <span>© {new Date().getFullYear()} Showerthoughts</span>
            </div>
        </footer>
    )
}
