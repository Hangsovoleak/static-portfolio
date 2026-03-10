/**
 * Description:
 *      Project showcase section with category filtering.
 *      Displays a grid of ProjectCard components based on selected tags.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { FolderGit2 } from "lucide-react";

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

function ProjectsSection({ projects = [] }) {
    // State management for active category filter
    const [activeFilter, setActiveFilter] = useState("All");

    // Derive available filters from project tags/tech so it stays in-sync with data
    const availableFilters = useMemo(() => {
        const uniqueTags = new Set<string>();

        projects.forEach((project) => {
            const tags = project.tags || project.tech || [];
            tags.forEach((tag) => {
                if (typeof tag === "string") {
                    uniqueTags.add(tag.trim());
                }
            });
        });

        return ["All", ...Array.from(uniqueTags).sort()];
    }, [projects]);

    // Memoized filtering logic
    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return projects;

        const filterKey = activeFilter.toLowerCase();
        return projects.filter((project) => {
            const tags = project.tags || project.tech || [];
            return tags.some(
                (tag) => typeof tag === "string" && tag.toLowerCase() === filterKey
            );
        });
    }, [projects, activeFilter]);

    return (
        <section id="projects" className="border-b border-cyan-100 bg-slate-950 py-20 text-white">
            <div className="portfolio-animate relative mx-auto max-w-7xl px-6">

                {/* Section Title and Badge */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-rose-300/40 bg-rose-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-rose-200">
                        <FolderGit2 size={14} />
                        Projects
                    </div>
                    <h2 className="mt-4 text-3xl font-black sm:text-4xl">Project Builds</h2>
                </div>

                {/* Filter Navigation */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                    {availableFilters.map((label) => (
                        <button
                            key={label}
                            onClick={() => setActiveFilter(label)}
                            className={
                                label === activeFilter
                                    ? "rounded-full border border-white/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-900"
                                    : "rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-200 hover:bg-white/10"
                            }
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                {filteredProjects.length === 0 ? (
                    <div className="mt-10 text-center text-sm font-medium text-slate-200">
                        No projects match this filter. Try selecting a different category.
                    </div>
                ) : (
                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id || project.title}
                                project={project}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default ProjectsSection;
