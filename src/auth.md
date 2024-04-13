```ts
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import type { UserWithPasswordHash } from "./definititions";
import { insertNewUser } from "./db";
const bcrypt = require("bcrypt");

async function selectUserByEmail(email: string): Promise<UserWithPasswordHash | undefined> {
    try {
        const user = await sql<UserWithPasswordHash>`SELECT * FROM users WHERE email=${email}`;
        return user.rows[0];
    } catch (error) {
        console.error("Failed to fetch user in auth.ts:", error);
        throw new Error("Failed to fetch user.");
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(3) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await selectUserByEmail(email);
                    if (!user) return null;

                    const passwordsMatch = await bcrypt.compare(password, user.password_hash);

                    if (passwordsMatch) return user;
                }
                console.log("Invalid credentials");
                return null;
            },
        }),
    ],
});
```
