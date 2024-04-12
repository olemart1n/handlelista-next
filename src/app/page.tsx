import Link from "next/link";
export default function Home() {
    return (
        <main>
            <Link
                className="relative mx-auto mt-10 flex h-16 w-11/12 place-items-center justify-around rounded-sm border bg-green-100 text-center text-4xl shadow-md drop-shadow-sm"
                href="/autentisering"
            >
                Logg inn
            </Link>
        </main>
    );
}
