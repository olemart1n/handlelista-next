```ts
"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import type { ZodIssue } from "zod";
import { insertNewUser, selectUserById } from "./db";
import { z } from "zod";
const bcrypt = require("bcrypt");
export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn("credentials", formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return "Invalid credentials.";
                default:
                    return "Something went wrong.";
            }
        }
        throw error;
    }
}

export async function register(prevState: string | undefined, formData: FormData) {
    "use server";
    console.log("hello");
    let hashed_passord: string;
    const obj = Object.fromEntries(formData.entries());

    const parsedCredentials = z
        .object({
            name: z.string().min(3),
            email: z.string().email(),
            password: z.string().min(6),
        })
        .safeParse(obj);
    if (!parsedCredentials.success) {
        return "noe gikk galt. Prøv igjen senere";
    }
    const { email, name, password } = parsedCredentials.data;
    hashed_passord = bcrypt.hash(password, 10);
    const newUser = await insertNewUser(name, email, hashed_passord);
    console.log(newUser);
    setTimeout(async () => {
        console.log("new user inserted");
    }, 2000);
}
```
