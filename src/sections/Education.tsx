/**
 * Description:
 *      Section component for displaying academic history and qualifications.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { GraduationCap } from "lucide-react";

/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
const SCHOOL_LOGOS = {
    "Royal University of Phnom Penh": "https://upload.wikimedia.org/wikipedia/km/e/ee/Rupp_logo.png",
    "Tux Global Institute": "https://www.tuxglobalinstitute.edu.kh/logo.png",
};

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

function EducationSection({ items = [] }) {
    return (
        <section id="education" className="relative border-b border-cyan-100 bg-white/60 py-20">
            <div className="portfolio-animate mx-auto max-w-6xl px-6">

                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-700">
                        < GraduationCap size={14} />
                        Education
                    </div>
                    <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
                        Academic Journey
                    </h2>
                </div>

                {/* Timeline and Content */}
                <div className="relative mx-auto mt-10 max-w-4xl">
                    <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-cyan-200 via-slate-200 to-transparent sm:block" />

                    <div className="space-y-6">
                        {items.map((entry, idx) => (
                            <article key={entry.id || idx} className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:pl-12">
                                <div className="absolute left-3 top-7 hidden h-4 w-4 rounded-full border-2 border-white bg-cyan-500 shadow sm:block" /> {/**for blue circle */}

                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        {SCHOOL_LOGOS[entry.institution] && (
                                            <img
                                                src={SCHOOL_LOGOS[entry.institution]}
                                                alt={`${entry.institution} logo`}
                                                className="h-10 w-10 rounded-lg object-contain"
                                            />
                                        )}
                                        <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">{entry.institution}</h3>
                                    </div>
                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                                        {entry.period}
                                    </span>
                                </div>

                                <p className="mt-3 text-sm font-semibold text-slate-700 sm:text-base">{entry.degree}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default EducationSection;
