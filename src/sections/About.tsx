/**
 * Description:
 *      Hero/About section of the portfolio.
 *      Displays the user's name, bio, and a profile image with dynamic typing animations.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { House } from "lucide-react";
import TextType from "../style/TextType";


/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Hero section with personal profile details.
 * 
 * @param {Object} profile User profile data (name, bio, email).
 * @param {string} backgroundImage Optional background image URL for the section.
 * @returns {JSX.Element|null} The rendered about section or null if no profile.
 */
function AboutSection({ profile, backgroundImage }) {
    // Return early if no profile data is available
    if (!profile) return null;

    // Local configuration
    const sectionStyle = backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : {};

    return (
        <section
            id="about"
            className="relative overflow-hidden border-b border-cyan-100 bg-cover bg-center bg-no-repeat"
            style={sectionStyle}
        >
            {/* Visual Overlays and Background Decor */}
            <div className="absolute inset-0 bg-slate-950/65" />
            <div className="absolute -left-20 top-28 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-16 bottom-12 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

            <div className="portfolio-animate relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-32 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-14 md:pb-20 md:pt-36">

                {/* Text Content Area */}
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
                        <House size={14} />
                        Personal Profile
                    </div>

                    <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
                        <TextType
                            text={[profile.name]}
                            typingSpeed={70}
                            pauseDuration={1500}
                            showCursor
                            cursorCharacter="_"
                            deletingSpeed={45}
                            variableSpeedEnabled={false}
                            variableSpeedMin={60}
                            variableSpeedMax={120}
                            cursorBlinkDuration={0.55}
                        />
                    </h1>

                    <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-100 sm:text-lg">
                        I am an Information Technology Engineering student
                        specializing in software development. I have experience
                        building web applications using modern frontend and
                        backend technologies. Strong foundation in programming,
                        system troubleshooting, and problem solving. Eager to
                        contribute technical skills while continuing to grow.
                    </p>
                </div>

                {/* Profile Image Area */}
                <div className="mx-auto w-full max-w-sm">
                    <div className="relative rounded-[2rem] border border-white/20 bg-white/10 p-3 backdrop-blur">
                        <img
                            src="../assets/myPF.jpg"
                            alt="Profile"
                            className="h-[340px] w-full rounded-[1.5rem] object-cover sm:h-[420px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default AboutSection;
