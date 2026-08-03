"use client";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    const socialIcon = [
        {
            img: "/images/icon/linkedin-icon.svg",
            href: "https://www.linkedin.com/in/udayteja1910/",
            icon: "LinkedIn"
        },
        {
            img: "/images/icon/github-icon.svg",
            href: "https://github.com/Udayteja10",
            icon: "GitHub"
        },
        {
            img: "/images/icon/email-icon.svg",
            href: "mailto:udayteja513@gmail.com",
            icon: "Email"
        },
    ];

    useEffect(() => {
        const saved = localStorage.getItem("typefolio-theme");
        if (saved === "light") {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        } else {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    const toggleTheme = () => {
        const isCurrentlyDark = document.documentElement.classList.contains("dark");
        const nextTheme = isCurrentlyDark ? "light" : "dark";
        setTheme(nextTheme);
        localStorage.setItem("typefolio-theme", nextTheme);
        if (nextTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <section>
            <div className="container">
                <div className="">
                    {/* Hero Banner Container */}
                    <div className="relative w-full h-72 overflow-hidden rounded-t-xl">
                        <Image src={"/images/hero-sec/banner-bg-img.png"} alt="banner-img" width={1080} height={267} className="w-full h-full object-cover z-0" />
                        
                        {/* Theme Toggle Button in top-right corner of banner (z-50) */}
                        <button
                            onClick={toggleTheme}
                            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            aria-label="Toggle light or dark theme"
                            className="absolute top-5 right-5 sm:top-6 sm:right-6 z-[50] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/85 dark:bg-[#0F172A]/85 backdrop-blur-md border border-white/50 dark:border-[#334155] shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 ease-out flex items-center justify-center cursor-pointer group"
                        >
                            {theme === "dark" ? (
                                <svg className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-slate-800 transition-transform duration-300 group-hover:-rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="border-x border-primary/10 dark:border-[#334155] bg-white dark:bg-[#0F172A] transition-colors duration-300">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12 z-10">
                            {/* Profile Avatar (z-10) */}
                            <div className="absolute top-0 transform -translate-y-1/2 z-10">
                                <div
                                    onClick={() => setIsOpen(true)}
                                    title="Click to view profile photo"
                                    className="group relative w-36 h-36 sm:w-40 sm:h-40 aspect-square rounded-full border-4 border-white dark:border-[#0F172A] overflow-hidden shadow-md shrink-0 cursor-pointer hover:scale-105 transition-all duration-300 ease-out"
                                >
                                    <Image
                                        src={"/portfolio_pfp.png"}
                                        alt="Divya Udaya Teja"
                                        width={160}
                                        height={160}
                                        priority
                                        className="w-full h-full object-cover object-center aspect-square rounded-full group-hover:brightness-105 transition-all duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-xs font-medium bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs">View</span>
                                    </div>
                                </div>
                            </div>

                            {/* User Bio */}
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start max-w-md">
                                <h1 className="text-primary font-semibold">Divya Udaya Teja</h1>
                                <p className="text-violet-700 dark:text-violet-400 font-medium">Software Engineer</p>
                                <p className="text-sm text-secondary leading-relaxed">
                                    Full-stack Software Engineer specializing in Java, Spring Boot, React, REST APIs, secure authentication, and scalable enterprise applications.
                                </p>
                                <div className="flex items-center gap-2 pt-1">
                                    <Image src={"/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} className="dark:invert" />
                                    <p className="text-primary text-sm font-medium">Hyderabad, Telangana, India</p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center">
                                {/* High Contrast Download Resume Button */}
                                <Button asChild className="h-auto rounded-full p-0.5!">
                                    <Link
                                        href="/resume.pdf"
                                        download
                                        className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                    >
                                        <span className="flex items-center gap-3 bg-[#1C212B] dark:bg-[#020617] hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full transition-colors duration-300">
                                            <Image
                                                src="/images/icon/spark-icon.svg"
                                                alt="spark-icon"
                                                width={14}
                                                height={14}
                                            />
                                            <span className="text-sm sm:text-base font-semibold text-white">Download Resume</span>
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Click to Expand Profile Photo Lightbox Modal (z-[100]) */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative max-w-md w-full bg-white dark:bg-[#111827] border border-transparent dark:border-[#334155] rounded-2xl p-4 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 hover:bg-black text-white text-lg font-bold transition-colors cursor-pointer"
                            aria-label="Close photo preview"
                        >
                            &times;
                        </button>
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-800">
                            <Image
                                src={"/portfolio_pfp.png"}
                                alt="Divya Udaya Teja"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, 450px"
                            />
                        </div>
                        <div className="text-center pt-3 pb-1">
                            <p className="font-semibold text-primary text-lg">Divya Udaya Teja</p>
                            <p className="text-xs text-violet-700 dark:text-violet-400 font-medium">Software Engineer</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default HeroSection
