"use server";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import type { User } from "@/definititions";
export async function insertNewUser(
    name: string,
    email: string,
    password: string,
    avatar?: string
) {
    noStore();
    try {
        const data = await sql<User>`
        INSERT INTO users (name, email, password_hash, avatar) VALUES (${name}, ${email}, ${password}, ${
            avatar || null
        }) RETURNING *;
      `;
        return data.rows[0];
    } catch (error) {
        console.error("insert new user error:", error);
        throw new Error("Failed to insert user.");
    }
}
