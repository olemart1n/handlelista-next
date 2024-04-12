import { ProfileMeta } from "@/components/profile-meta";
import { ListWithOwnedLists } from "@/components/list-with-owned-lists";
import { Suspense } from "react";

export default function Page() {
    return (
        <main className="dark:text-slate-50">
            <Suspense fallback={<p>Loading..</p>}>
                <ProfileMeta />
            </Suspense>
            <Suspense fallback={<p>Loading..</p>}>
                <ListWithOwnedLists />
            </Suspense>
        </main>
    );
}
