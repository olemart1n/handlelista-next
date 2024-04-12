import Image from "next/image";
interface OAuthComponentProps {
    provider: string;
    imageUrl: string;
}

export function OAuthComponent({ provider, imageUrl }: OAuthComponentProps) {
    const providerCapitalized = provider[0].toUpperCase() + provider.substring(1);
    return (
        <a
            href={"server??????/v1/auth/" + provider}
            className="mx-auto flex  w-3/4 justify-around  rounded-md border border-gray-200 p-1 shadow-sm "
        >
            {" "}
            <Image
                src={imageUrl}
                className=" mx-3 my-auto "
                alt="google logo"
                height={40}
                width={40}
            />
            <span className="my-auto">{providerCapitalized}</span>
        </a>
    );
}
