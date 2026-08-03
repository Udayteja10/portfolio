"use client";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const FeaturedWork = () => {
    const [featureWork, setFeatureWork] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/featured-work')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setFeatureWork(data?.featureWork)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <section>
            <div className="container">
                <div className="relative border-x border-primary/10 dark:border-[#334155] bg-white dark:bg-[#0F172A] transition-colors duration-300">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Featured Projects</p>
                            <Button asChild variant={"outline"} className="h-auto border-primary/10 dark:border-[#334155] dark:bg-[#111827] dark:text-[#F8FAFC] dark:hover:bg-[#1E293B] transition-colors">
                                <Link href={"/resume.pdf"} download className="py-3 px-5">
                                    Download Resume
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10 dark:border-[#334155]">
                        {featureWork?.map((value: any, index: number) => {
                            const isRightCol = index % 2 === 1;

                            return (
                                <div
                                    key={index}
                                    className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 bg-white dark:bg-[#0F172A] ${isRightCol ? 'md:border-l md:border-primary/10 dark:md:border-[#334155]' : ''} ${index > 0 ? 'border-t border-primary/10 dark:border-[#334155] md:border-t-0' : ''}`}
                                >
                                    <div className="overflow-hidden rounded-lg border border-primary/10 dark:border-[#334155] bg-gray-50 dark:bg-[#111827]">
                                        <Image
                                            src={value?.image}
                                            alt={value?.title || "Project image"}
                                            width={490}
                                            height={300}
                                            className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 px-2">
                                        <div>
                                            <h4 className="text-lg sm:text-xl font-semibold text-primary">{value?.title}</h4>
                                            {value?.subtitle && <p className="text-xs sm:text-sm font-medium text-violet-700 dark:text-violet-400">{value?.subtitle}</p>}
                                        </div>
                                        <div className="flex flex-wrap gap-1.5 py-1">
                                            {value?.roles?.map((tech: string, tIdx: number) => (
                                                <span key={tIdx} className="text-xs bg-primary/5 dark:bg-[#111827] text-primary px-2 py-0.5 rounded border border-primary/10 dark:border-[#334155] font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-sm text-secondary leading-relaxed">{value?.description}</p>
                                        {value?.githubUrl && (
                                            <div className="pt-2">
                                                <Button asChild variant={"outline"} className="h-auto w-fit border-primary/10 dark:border-[#334155] dark:bg-[#111827] dark:text-[#F8FAFC] dark:hover:bg-[#1E293B] transition-colors">
                                                    <Link href={value?.githubUrl} target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 flex items-center gap-2">
                                                        <Image src="/images/icon/github-icon.svg" alt="GitHub" width={16} height={16} className="dark:invert" />
                                                        <span className="text-xs sm:text-sm font-medium">GitHub Repository</span>
                                                    </Link>
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedWork