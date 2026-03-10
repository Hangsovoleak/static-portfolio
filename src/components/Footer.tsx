/**
 * Description:
 *      Application footer component containing contact information and social links.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { Contact, Github, Linkedin, Mailbox } from "lucide-react";

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

function Footer({ email }) {
    return (
        <footer id="contact" className="bg-slate-950 text-white">
            <div className="portfolio-animate mx-auto max-w-6xl px-6 py-20">
                <div className="mx-auto max-w-3xl text-center">

                    {/* Section Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-yellow-100">
                        <Contact size={14} />
                        Contact
                    </div>

                    <h2 className="mt-4 text-3xl font-black sm:text-4xl">Let’s Build Something Useful</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-slate-300 sm:text-base">
                        I am open to internships, collaboration, and engineering opportunities. Reach out if you want to build practical products together.
                    </p>

                    {/* Email Display */}
                    {email && (
                        <a
                            href={`mailto:${email}`}
                            className="mt-7 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/20"
                        >
                            {email}
                        </a>
                    )}

                    {/* Social Icons */}
                    <div className="mt-10 flex items-center justify-center gap-3">
                        <a
                            className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/15"
                            href={email ? `mailto:${email}` : "mailto:"}
                            aria-label="Email"
                        >
                            <Mailbox className="h-5 w-5 text-orange-300" />
                        </a>
                        <a
                            className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/15"
                            href="https://github.com/Hangsovoleak"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5 text-cyan-300" />
                        </a>
                        <a
                            className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/15"
                            href="https://www.linkedin.com/in/hangsovoleak"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5 text-emerald-300" />
                        </a>
                    </div>

                    {/* Copyright/Branding Footer */}
                    <div className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Rorn Hangsovoleak | Portfolio
                    </div>
                </div>
            </div>
        </footer>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default Footer;
