'use client'
import { useState } from "react"
import HambergerMenu from "./HamburgerMenu"
import Link from "next/link";

export default function Navbar(){
    
    const [isHMenuOpen, setIsHMenuOpen] = useState(false);

    return(
        <>
            <nav className="fixed top-4 left-1/2 z-50 w-[95%] lg:w-[90%] -translate-x-1/2 rounded-2xl border-2 border-border bg-bg2 px-6 py-0 lg:py-2 shadow-md shadow-shadow backdrop-blur-md">
                <div className="relative flex min-h-14 items-center justify-between">

                    {/* Hamburger - Mobile */}
                    <button
                        onClick={() => {
                         setIsHMenuOpen(!isHMenuOpen);
                        }}
                        type="button"
                        aria-label="باز کردن منو"
                        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition hover:bg-white/10 lg:hidden"
                        >
                        <span className="relative h-6 w-6">
                            <span
                                className={`absolute left-0 top-1/2 block h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${
                                isHMenuOpen ? "rotate-45" : "-translate-y-2"
                                }`}
                            />

                            <span
                                className={`absolute left-0 top-1/2 block h-0.5 w-6 rounded-full bg-white transition-opacity duration-300 ${
                                isHMenuOpen ? "opacity-0" : "opacity-100"
                                }`}
                            />

                            <span
                                className={`absolute left-0 top-1/2 block h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${
                                isHMenuOpen ? "-rotate-45" : "translate-y-2"
                                }`}
                            />
                        </span>
                    </button>

                    {/* Desktop Menu */}
                    <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium lg:flex">
                        <li><Link href="/" className="transition hover:text-primary">صفحه اصلی</Link></li>
                        <li><Link href="/packages?type=internet" className="transition hover:text-primary">اینترنت</Link></li>
                        <li><Link href="/packages?type=call" className="transition hover:text-primary">مکالمه</Link></li>
                        <li><Link href="/packages?type=sms" className="transition hover:text-primary">پیامک</Link></li>
                        <li><Link href="/support" className="transition hover:text-primary">پشتیبانی</Link></li>
                    </ul>

                    {/* Logo */}
                    <div className="justify-self-center whitespace-nowrap text-2xl font-bold sm:text-3xl">
                        <span className="mr-1 inline-block italic text-primary">N</span> نکساتل</div>

                    {/* Login - Desktop */}
                    <button
                        type="button"
                        className="hidden justify-self-end rounded-xl border-3 border-border-green bg-primary px-5 py-2.5 text-sm font-bold text-bg1 transition hover:scale-105 hover:shadow-lg lg:block"
                        >
                        ورود / ثبت نام
                    </button>

                    {/* Login Icon - Mobile */}
                    <button
                        type="button"
                        aria-label="ورود یا ثبت نام"
                        className="flex h-10 w-10 items-center justify-center justify-self-end rounded-xl border-3 border-border-green bg-primary text-bg1 transition hover:scale-105 lg:hidden"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 15l3-3m0 0l-3-3m3 3H3"
                            />
                        </svg>
                    </button>
                </div>
                
            </nav>
            <HambergerMenu isOpen={isHMenuOpen} />
        </>
    )
}