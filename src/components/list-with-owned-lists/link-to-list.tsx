/* eslint-disable @next/next/no-img-element */
"use client";
import { LucideMoreVertical } from "lucide-react";
import { InfoBox } from "./info-box";
import Link from "next/link";
import { useRef, useState } from "react";
export async function LinkToList({ title, id }: { title: string; id: string }) {
    const [isInfoBox, setIsInfoBox] = useState(false);
    const divEl = useRef<HTMLDivElement>(null);
    return (
        <div
            className="border-1 mx-auto my-2 flex h-12 w-full justify-between rounded-lg bg-slate-100  align-middle shadow-md dark:text-gray-900"
            ref={divEl}
        >
            {isInfoBox ? (
                <InfoBox />
            ) : (
                <Link
                    onClick={() => setIsInfoBox(() => !isInfoBox)}
                    className="my-auto w-full p-2 text-lg"
                    href={`/liste/${id}`}
                >
                    {title}
                </Link>
            )}
            <button onClick={() => setIsInfoBox(() => !isInfoBox)}>
                <LucideMoreVertical className="h-6 w-6 " />
            </button>
        </div>
    );
}
