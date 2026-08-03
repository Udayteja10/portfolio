import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "SubTrack AI",
        subtitle: "Enterprise SaaS Intelligence Platform",
        roles: ["Java 21", "Spring Boot", "React", "MySQL", "Docker"],
        description: "Multi-tenant SaaS platform for managing subscriptions, vendors, budgets, contracts, analytics dashboards, JWT authentication, RBAC, and Docker deployment.",
        githubUrl: "https://github.com/Udayteja10/saas-intelligence-platform.git",
        image: "/images/feature-work/feature-img-1.png"
    },
    {
        title: "ClubIQ Bayern",
        subtitle: "Football Club Intelligence Platform",
        roles: ["Java 21", "Spring Boot", "React", "Sportmonks API", "MySQL", "Docker"],
        description: "Football club intelligence platform for player scouting, transfer analysis, squad planning, real-time player synchronization, Sportmonks API integration, and secure JWT authentication.",
        githubUrl: "https://github.com/Udayteja10/bayern-scouting-platform.git",
        image: "/images/feature-work/feature-img-2.png"
    },
    {
        title: "CampusOS",
        subtitle: "University Management Platform",
        roles: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"],
        description: "University management platform supporting students, faculty, attendance, examinations, placements, refresh token authentication, Helmet security, rate limiting, and Winston logging.",
        githubUrl: "https://github.com/Udayteja10/Campus-OS-",
        image: "/images/feature-work/feature-img-3.png"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};