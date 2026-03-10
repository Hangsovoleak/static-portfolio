/**
 * Description:
 *      Card component for an individual project.
 *      Displays project image, title, description, and tags.
 */

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

function ProjectCard({ project }) {
    // Basic validation
    if (!project) return null;

    // Local configuration with fallbacks
    const image = project.image || project.imageUrl || "/assets/bg.png";
    const link = project.link || project.projectUrl || "";

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-xl hover:shadow-cyan-900/20">

            {/* Visual Header: Thumbnail and Overlay */}
            <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                    src={image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
            </div>

            {/* Content Area */}
            <div className="flex h-full flex-col p-5">
                <h3 className="text-xl font-black text-white">{project.title}</h3>

                <p className="mt-3 text-sm font-medium leading-6 text-slate-200">{project.description}</p>

                {/* Tags Metadata */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {(project.tags || []).map((tags) => (
                        <span
                            key={tags}
                            className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-cyan-100"
                        >
                            {tags}
                        </span>
                    ))}
                </div>

                {/* Action Controls */}
                {(link || (project.id)) && (
                    <div className="mt-auto flex items-center gap-2 pt-5">
                        {link && (
                            <a
                                className="inline-flex flex-1 items-center justify-center rounded-lg bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-900 hover:bg-slate-200"
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open Project
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default ProjectCard;
