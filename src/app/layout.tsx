import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeToggler } from "@/components/theme-toggler";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Handlelista",
    description: "handlelista.no",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header>
                    <nav className="text-md flex w-full transform justify-between p-1 py-2 duration-300 dark:text-slate-50">
                        <Link href="/">
                            <h1>handlelista.no</h1>
                        </Link>
                        <ThemeToggler />
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
