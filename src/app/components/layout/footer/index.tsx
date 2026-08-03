import Link from "next/link"

const Footer = () => {
    return (
        <footer className="-translate-y-[1px] bg-white dark:bg-[#0F172A] border-t border-primary/10 dark:border-[#334155] transition-colors duration-300">
            <div className="container">
                <div className="border-x border-primary/10 dark:border-[#334155]">
                    <div className="max-w-3xl mx-auto flex flex-col gap-6 px-4 sm:px-7 py-8 md:py-12">
                        <div className="flex flex-col gap-3">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Contact</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-secondary pt-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-primary">Email:</span>
                                    <a href="mailto:udayteja513@gmail.com" className="hover:text-primary underline">udayteja513@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-primary">Location:</span>
                                    <span>Hyderabad, Telangana, India</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-primary">LinkedIn:</span>
                                    <a href="https://www.linkedin.com/in/udayteja1910/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">LinkedIn</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-primary">GitHub:</span>
                                    <a href="https://github.com/Udayteja10" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-primary/10 dark:border-[#334155] pt-4 flex flex-col sm:flex-row justify-between text-xs text-secondary gap-2">
                            <p>© 2026 Divya Udaya Teja. All rights reserved.</p>
                            <div className="flex items-center gap-4">
                                <a href="https://www.linkedin.com/in/udayteja1910/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">LinkedIn</a>
                                <a href="https://github.com/Udayteja10" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">GitHub</a>
                                <a href="mailto:udayteja513@gmail.com" className="hover:text-primary underline">Email</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer