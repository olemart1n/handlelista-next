"use client";
import { LucideMoon, LucideSun } from "lucide-react";
export function ThemeToggler() {
    return (
        <button
            onClick={() => console.log("hello")}
            className="relative  flex h-4 w-9 items-center rounded-full outline outline-1 transition  duration-300 dark:text-slate-50 dark:outline dark:outline-1 lg:mx-0 lg:my-0"
        >
            <LucideMoon className=" absolute right-0 transform opacity-0 transition h-4 duration-300 dark:left-auto dark:-translate-x-5 dark:opacity-100" />
            <LucideSun className="absolute right-0 transform transition duration-300  h-4 dark:-translate-x-5  dark:opacity-0" />
        </button>
    );
}
