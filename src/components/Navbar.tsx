/**
 * Description:
 *      Sticky navigation header component.
 *      Contains the branding (logo/name) and primary navigation links.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { TentTree } from "lucide-react";

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

function Header({ links = [], cvUrl = "/assets/Sovoleak CV.pdf" }) {
    return (
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-100/70 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:h-20 sm:gap-6 sm:px-6">

                {/* Branding / Logo */}
                <div className="flex min-w-0 items-center gap-3 portfolio-animate">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 text-white shadow-lg shadow-blue-300">
                        <TentTree color="#ffffff" size={18} />
                    </div>
                    <div className="leading-tight">
                        <div className="truncate text-sm font-extrabold uppercase tracking-[0.16em] text-slate-900 sm:text-base">
                            Rorn Hangsovoleak
                        </div>
                    </div>
                </div>

                {/* Navigation and Actions */}
                <div className="ml-auto flex items-center gap-2 sm:gap-4">
                    <nav className="hidden items-center gap-1 lg:flex">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={link.href ? link.href : `#${link.id}`}
                                className="rounded-full border border-transparent px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-cyan-100 hover:bg-cyan-50 hover:text-slate-900"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default Header;
