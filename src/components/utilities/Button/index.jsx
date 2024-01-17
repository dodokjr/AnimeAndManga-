import Link from "next/link"

const Button = ({title, url, target}) =>
{
    return (
        <>
            <Link href={url} target={target} className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
                {title}
            </Link>
        </>
    )
}

export default Button