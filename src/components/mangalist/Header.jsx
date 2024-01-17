import Link from "next/link";

const HeaderManga = ({ title, linkhref, linkTitle }) =>
{
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
            {
                linkhref && linkTitle ?
                    <Link href={linkhref} className="md:text-xl text-md underline hover:text-color-accent text-color-primary transition-all">{linkTitle}</Link>
                    : null
            }

        </div>
    )
}


export default HeaderManga