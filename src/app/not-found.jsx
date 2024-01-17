"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"


const NotFound = () =>
{
    return (
        <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-color-accent">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-color-primary sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-color-primary">Maaf page yang anda cari tidak ada</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href='/' className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm text-color-primary hover:text-color-accent ">Go back Home</Link>
                </div>
            </div>
        </div>
    )
}


export default NotFound