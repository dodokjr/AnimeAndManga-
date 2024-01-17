import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { FaGithub } from "react-icons/fa6";

const Page = async() => {
    const user = await authUserSession()
    console.log(user)
    if(!user) redirect("/")

    return(
        <div className="flex justify-center items-center">
            <div className="p-4 font-bold">
                <div className="text-color-primary ">
                <h3>Dashboard</h3>
            <h5>Welcome, {user.name}</h5>
                </div>
            <Image src={user.image} alt="...."  width={200} height={200} className="rounded-lg"/>

            <div className="text-color-primary py-2">Your Email: {user.email}</div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-color-gray"/>
            <div className="grid grid-cols-2 gap-2">
            <Link href="/api/auth/signout" className="bg-color-accent font-bold rounded-md gap-2 py-1 px-12 hover:bg-color-secondary hover:text-color-primary">Signout</Link>
            </div>
        </div>
        </div>
    )
}

export default Page