"use client";
// NETTSIDEN VIL FORELØPIG FUNGERE UTEN AUTENTIKASJON
// import { authenticate } from "@/authActions";
// import { useFormState } from "react-dom";
export default function Page() {
    // const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    // action={dispatch} ----> <form action={dispatch}....>
    return (
        <main>
            <form className="space-y-3">
                <div className="flex-1 rounded-lg  px-6 pb-4 pt-8">
                    <h1 className="mb-3  text-2xl">Logg inn</h1>
                    <div className="w-full">
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
                                    type="email"
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
                            disabled
                            type="submit"
                            className="mx-auto my-2 block rounded-sm border dark:text-gray-800 border-gray-200 bg-gray-100 px-4 py-1 text-lg shadow-md"
                        >
                            Logg inn
                        </button>
                    </div>
                    <div
                        className="flex h-8 items-end space-x-1"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {/* {errorMessage && (
                            <>
                                <p className="text-sm text-red-500">{errorMessage}</p>
                            </>
                        )} */}
                    </div>
                </div>
                <p className="py-4 text-center">
                    Har du ikke bruker?{" "}
                    <a href="/autentisering/registrer" className="underline">
                        Registrer
                    </a>
                </p>
            </form>
        </main>
    );
}
