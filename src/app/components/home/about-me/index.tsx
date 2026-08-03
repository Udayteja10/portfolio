import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const skillCategories = [
        {
            category: "Frontend",
            skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
        },
        {
            category: "Backend",
            skills: ["Java 21", "Spring Boot", "Node.js", "Express.js", "REST APIs", "Hibernate", "JWT Authentication"]
        },
        {
            category: "Databases",
            skills: ["MySQL", "MongoDB"]
        },
        {
            category: "Tools",
            skills: ["Git", "GitHub", "Docker", "Maven", "AWS", "VS Code"]
        },
        {
            category: "Core Concepts",
            skills: ["DBMS", "Operating Systems", "Computer Networks", "Software Engineering"]
        }
    ];

    return (
        <section>
            <div className="container">
                <div className="relative border-x border-primary/10 dark:border-[#334155] bg-white dark:bg-[#0F172A] transition-colors duration-300">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-relaxed text-primary">
                                Full-stack Software Engineer with expertise in building enterprise applications using <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)] dark:bg-amber-500/20 px-1 rounded text-primary">Java, Spring Boot, and React</span>.
                            </h2>
                            <h5 className="text-secondary font-normal leading-relaxed">
                                Specialized in REST API development, secure authentication, scalable backend systems, and cloud-ready applications. Passionate about building clean, efficient, and production-ready software.
                            </h5>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Skills</p>
                            <div className="flex flex-col gap-5">
                                {skillCategories.map((group, index) => (
                                    <div key={index} className="flex flex-col gap-2">
                                        <p className="text-xs font-semibold text-violet-700 dark:text-violet-400 uppercase tracking-wider">{group.category}</p>
                                        <div className="flex flex-wrap gap-2 sm:gap-3">
                                            {group.skills.map((skill, sIdx) => (
                                                <Badge variant={"outline"} key={sIdx} className="py-1.5 px-3 rounded-lg bg-white dark:bg-[#111827] dark:border-[#334155]">
                                                    <p className="text-xs sm:text-sm font-medium text-primary">{skill}</p>
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe