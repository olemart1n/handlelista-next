import { selectListsByUserId } from "@/db";
import { LinkToList } from "./link-to-list";
import type { List } from "@/definititions";
export async function ListWithOwnedLists() {
    const lists = await selectListsByUserId(1);
    console.log("lists");
    console.log(lists);
    return (
        <div>
            {lists.map((link: List, i) => (
                <LinkToList title={link.title} id={link.id.toString()} key={i} />
            ))}
        </div>
    );
}
