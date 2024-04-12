export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-3/5 my-auto rounded shadow-sm flex-col dark:text-white bg-slate-800  w-10/12 md:w-1/2 mx-auto">
            {children}
        </div>
    );
}
