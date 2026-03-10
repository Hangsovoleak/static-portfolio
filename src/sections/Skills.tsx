/**
 * Description:
 *      Section displaying a grid of technical skills and tools.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import SkillCard from "../components/SkillsCard";
import { Sparkles } from "lucide-react";

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

function SkillsSection({ skills = [] }) {
    return (
        <section id="skills" className="border-b border-cyan-100 bg-white py-20">
            <div className="portfolio-animate mx-auto max-w-6xl px-6">

                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-violet-700">
                        <Sparkles size={14} />
                        Skills
                    </div>
                    <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Skills & Tools</h2>
                </div>

                {/* Skills Grid */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.id || skill.name}
                            skill={skill}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default SkillsSection;
