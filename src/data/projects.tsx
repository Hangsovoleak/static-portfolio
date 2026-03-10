import type { Project } from "../types/projects";

export const projectsData: Project[]= [
    {
        id: 1,
        title: "Donation Platform Cambodia",
        description: "A web application that allows users to donate to various causes in Cambodia. Built with React, Node.js, and postgreSQL.",
        tags: ["HTML", "JS", "Tailwind"],
        image: "../assets/donationPlatform.jpg",
        link: "https://github.com/Hangsovoleak/donation-ngo-project.git",
    },
    {
        id: 2,
        title: "Portfolio",
        description: "A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
        tags: ["HTML", "Tailwind", "JS"],
        image: "../assets/portfolioImage.jpg",
        link: "https://github.com/Hangsovoleak/static-portfolio.git",
    },
    {
        id: 3,
        title: "Market System`",
        description: "A web application for managing and displaying products in a market environment.",
        tags: ["Java", "MySQL"],
        image: "../assets/marketsys.jpg",
        link: "https://github.com/Hangsovoleak/market-system-java.git",
    }
]