import Link from "next/link"
import { FaGithub, FaInstagram } from "react-icons/fa6";
import {authUserSession} from "@/libs/auth-libs"
import { getMyApiResponse } from "@/libs/api-libs";

const Footer = async() => {
    const user = await authUserSession();
    const myApi = await getMyApiResponse();

    const footerMedia = [
        {
            id: 1, 
            title: "Github",
            mUrl: "https://api-mfikria.vercel.app/mediasosial?q=github",
            Icon : FaGithub
        },
        {
            id: 2, 
            title: "Instagram",
            mUrl: "https://api-mfikria.vercel.app/mediasosial?q=instagram",
            Icon : FaInstagram
        }
    ] 
    

    let date = new Date();
    let year = date.getFullYear();
    return(
        <footer className="bg-color-accent rounded-lg shadow m-4 text-color-primary">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href={"/"}>mfAnimeList </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                        <li>
                            <Link href={"/"} className="hover:underline hover:text-color-gray me-4 md:me-6">Home</Link>
                        </li>
                        <li>
                            { user ? <Link href={"/users/dashboard"} className="hover:underline hover:text-color-gray me-4 md:me-6">{user.name}</Link>
                         :<Link href={"/api/auth/signin"} className="hover:underline hover:text-color-gray me-4 md:me-6">SignIn</Link>  
                        }
                            
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-color-blue sm:mx-auto lg:my-2"/>
               <div className="sm:flex sm:items-center sm:justify-between">
                 <span className="block text-sm text-color-primary sm:text-center">Copyright © {year} mfAnimeList</span>
                   <div className="flex mt-4 sm:justify-center sm:mt-0">
                    {footerMedia.map((footermedia) => (
                        <div className="grid grid-cols-2 gap-2 sm:gap-1 sm:grid-cols-3">
                            <Link href={footermedia.mUrl}>
                            <footermedia.Icon className="hover:text-color-gray font-medium text-xl"/>
                        </Link>
                        </div>
                    ))}
              </div>
             </div>
            </div>
        </footer>
    )
}

export default Footer