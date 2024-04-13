/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Button } from "./button";
export async function LinkToList({ title, id }: { title: string; id: string }) {
    return (
        <div className="border-1 mx-auto my-2 flex h-12 w-full justify-between rounded-lg bg-slate-100  align-middle shadow-md dark:">
            <Link className="my-auto w-full p-2 text-lg dark:text-gray-800" href={`/liste/${id}`}>
                {title}
            </Link>
            <Button />
        </div>
    );
}
