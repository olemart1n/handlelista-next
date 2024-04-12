import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import type { User, List } from "@/definititions";
export async function selectUserById(id: number) {
    noStore();
    try {
        const data = await sql<User>`
        SELECT
          users.id,
          users.name,
          users.email,
          users.avatar
        FROM users
        WHERE id = ${id};
      `;

        return data.rows[0];
    } catch (error) {
        console.error("fetchUserById:", error);
        throw new Error("Failed to fetch invoice.");
    }
}

export async function selectListsByUserId(id: number) {
    noStore();
    try {
        const data =
            await sql<List>`SELECT lists.*, user_list.role FROM lists JOIN user_list ON lists.id = user_list.list_id WHERE user_list.user_id = ${id}`;
        return data.rows;
    } catch (error) {
        console.error("fetchUserById:", error);
        throw new Error("Failed to fetch invoice.");
    }
}
