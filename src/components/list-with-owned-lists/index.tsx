import { selectListsByUserId } from "@/db";
import { LinkToList } from "./link-to-list";
import type { List } from "@/definititions";

export async function ListWithOwnedLists() {
    const lists = await selectListsByUserId(1);
    return (
        <div>
            {lists.map((link: List, i: any) => (
                <LinkToList title={link.title} id={link.id.toString()} key={i} />
            ))}
        </div>
    );
}
