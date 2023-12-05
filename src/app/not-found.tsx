import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-[70vh] flex items-center justify-center">
            <div>
                <h2>404 Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/" className="text-[#3e6ab3] hover:text-[#6792d8]">Return Home</Link>
            </div>
        </div>
    );
}
