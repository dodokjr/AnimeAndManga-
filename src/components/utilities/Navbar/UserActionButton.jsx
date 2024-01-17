import Link from "next/link"
import {authUserSession} from "@/libs/auth-libs"
import Image from "next/image";

const UserActionButton = async() => {
    const user = await authUserSession();

    return(
        <div className="flex justify-between gap-2 ">
            <div>
            {
                user ?  <Link href="/users/dashboard" className="relative flex rounded-full bg-color-gray text-sm focus:outline-none focus:ring-2 focus:ring-color-primary transition-all" title={user.name}>
                <span className="absolute -inset-1.5"></span>
                <Image className="h-8 w-8 rounded-full" src={user.image} width={90} height={90} alt="..." />
              </Link> : <Link href="/api/auth/signin" className="bg-color-dark text-color-primary hover:bg-color-primary hover:text-color-dark py-1 px-12 rounded-md">Signin</Link>
            }
          </div>
        </div>
    )
}

export default UserActionButton