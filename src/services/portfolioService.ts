import { profileDate as profile } from "../data/profile";
import { projectsData as projects } from "../data/projects";
import { skills } from "../data/skills";

export const fetchPortfolioData = async () => {
    return {
        profile,
        projects,
        skills: skills.map(skill => ({ name: skill })), // Converting string[] to expected Object[]
        education: [
            {
                id: 1,
                institution: "Royal University of Phnom Penh",
                degree: "Bachelor of Information Technology Engineering",
                period: "2025 - Present",
            },
            {
                id: 2,
                institution: "Tux Global Institute",
                degree: "Associate Degree in App/Web Development",
                period: "2025 - Present",
            }
        ],
        experience: [
            {
                id: 1,
                company: "Volunteer Tech for Kids Academy",
                role: "IT Support",
                period: "Oct - Jan 2026",
                description: 
                "Boot and activate Windows on laptop and desktop./n" + 
                "Clean laptop and desktops, including checking RAM and battery power.\n" + 
                "Find information and reference on how to install or set up Windows\n" +
                "using a USB, so the laptop runs smoothly and safely without bugs."
            }
        ]
    };
};
