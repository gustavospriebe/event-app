import Link from "next/link";


function Header() {
    return (
        <header>
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/about-us">About us</Link>
        </header>
    );
}

export default Header;
