/* eslint-disable @next/next/no-img-element */
import type { User } from "@/definititions";
import { selectUserById } from "@/db";
import Image from "next/image";

export async function ProfileMeta() {
    const user = await selectUserById(1);
    return (
        <div className="mx-auto flex w-full justify-around p-1 dark:text-slate-50 lg:w-1/2">
            <div className="min:h-full flex flex-col justify-content-space-around p-4">
                <h1 className=" h-6 my-auto">{user.name}</h1>
                <h2 className="h-6 my-auto">{user.email}</h2>
            </div>
            <img
                src={
                    user.avatar
                        ? user.avatar
                        : "https://imgs.search.brave.com/MBO8j3m04uuveyvzSCslv0TPmyesyzQaR_OX2fTtHl0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9wcm9maWxl/LTItaWNvbi0yNTZ4/MjU2LWJ2aDd4d3lm/LnBuZw"
                }
                alt="profile image"
                className="rounded-sm h-44 aspect-square object-contain"
            />
        </div>
    );
}
