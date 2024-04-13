"use client";
export function Button() {
    return (
        <button onClick={() => console.log("hello")} className="dark:text-gray-800">
            btn
        </button>
    );
}
