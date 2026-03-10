/**
 * Description:
 *      Miniature card component for a single technical skill.
 *      Displays an icon (or fallback text) and the skill name.
 */

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

function SkillCard({ skill }) {
    // Local configuration
    const icon = skill.icon || skill.iconUrl || "";

    return (
        <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-white hover:shadow-md">

            {/* Skill Icon or Fallback Branding */}
            {icon ? (
                <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white">
                    <img src={icon} alt={skill.name} className="h-7 w-7 object-contain" />
                </div>
            ) : (
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-100 text-xs font-bold text-cyan-700">
                    {skill.name?.slice(0, 2)?.toUpperCase()}
                </div>
            )}

            {/* Label */}
            <span className="min-w-0 flex-1 truncate text-sm font-bold uppercase tracking-wide text-slate-700">
                {skill.name}
            </span>
        </div>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default SkillCard;
