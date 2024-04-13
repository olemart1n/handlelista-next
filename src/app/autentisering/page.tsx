import { OAuthComponent } from "@/components/oauth-component";
export default function Page() {
    interface Provider {
        name: string;
        imageUrl: string;
    }
    const providers: Provider[] = [
        {
            name: "google",
            imageUrl: "/google.svg",
        },
        {
            name: "github",
            imageUrl: "/github.webp",
        },
        {
            name: "spotify",
            imageUrl: "/spotify.webp",
        },
    ];
    return (
        <section className="mt-5 flex flex-col gap-3 h-1/2 justify-between">
            <h2 className="text-center text-lg ">Velg innloggings metode</h2>
            <a
                className="border-gra mx-auto  flex  h-12 w-3/4  place-content-center rounded-sm border border-gray-200 shadow-sm"
                href="/autentisering/logg-inn"
            >
                <span className="my-auto text-lg">Email & passord</span>
            </a>
            {providers.map((provider: Provider, i: number) => (
                <OAuthComponent key={i} provider={provider.name} imageUrl={provider.imageUrl} />
            ))}
        </section>
    );
}
