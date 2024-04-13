"use client";
// NETTSIDEN VIL FORELØPIG FUNGERE UTEN AUTENTIKASJON
// import { insertNewUser } from "@/db";
// import { register } from "@/authActions";
// import { useFormState, useFormStatus } from "react-dom";
export default function Page() {
    // const [errorMessage, dispatch] = useFormState(register, undefined);
    // const { pending } = useFormStatus();
    return (
        <main>
            <form className="space-y-3">
                <div className="flex-1 rounded-lg  px-6 pb-4 pt-8">
                    <h1 className="mb-3  text-2xl">Opprett bruker</h1>
                    <div className="w-full">
                        <div>
                            <label
                                className="mb-3 mt-5 block font-medium text-slate-50"
                                htmlFor="name"
                            >
                                Navn
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border text-gray-800 border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="name"
                                    type="name"
                                    name="name"
                                    placeholder="Enter your a name"
                                    disabled
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                className="mb-3 mt-5 block font-medium text-slate-50"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border text-gray-800 border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="email"
                                    name="email"
                                    placeholder="Email addresse"
                                    required
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                className="mb-3 mt-5 block font-medium text-slate-50"
                                htmlFor="password"
                            >
                                Passord
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border text-gray-800 border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Passord"
                                    required
                                    disabled
                                    minLength={6}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <button
                            type="submit"
                            className="mx-auto my-2 block rounded-sm border dark:text-gray-800 border-gray-200 bg-gray-100 px-4 py-1 text-lg shadow-md"
                        >
                            Logg inn
                        </button>
                    </div>
                </div>
                <p className="py-4 text-center">
                    Har du bruker?{" "}
                    <a href="/autentisering/logg-inn" className="underline">
                        Logg inn
                    </a>
                </p>
                <PendingComponent />
            </form>
        </main>
    );
}
function PendingComponent() {
    // const { pending } = useFormStatus();
    return (
        <button type="submit">
            {/* {pending ? "Submitting..." : "Submit"} */}
            Hello there
        </button>
    );
}
