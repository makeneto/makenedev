import { useScrollToSection } from "../helpers/scrollToSection"
import { useMediaQuery } from "react-responsive"

export default function WorkSection() {
    const scrollToSection = useScrollToSection()
    const isTablet = useMediaQuery({ maxWidth: 884 })
    const isPhone = useMediaQuery({ maxWidth: 480 })
    const fontSizeClass = !isTablet ? "text-base" : "pr-[4px]"

    return (
        <div className="bg-transparent">
            <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
                <div className="max-w-3xl mb-10 lg:mb-14">
                    <h2 className={`${isPhone ? 'text-3xl' : 'text-4xl'} text-white font-semibold  md:leading-tight mb-5`}>How I work</h2>

                    <p className={`mt-1 text-neutral-400 font-normal ${fontSizeClass}`}>
                        We follow a simple and efficient process to turn your idea into reality. With transparency and organization, we guarantee that each step is clear and objective.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
                    <div className={`${isTablet ? 'h-[30rem]' : 'h-full'}`}>
                        <img
                            className={`${isTablet ? 'h-[30rem]' : 'h-full'} w-full object-cover rounded-xl`}
                            src={`${isTablet ? "/assets/work-img-sm.webp" : "/assets/work-img.webp"}`}
                            alt="Features Image"
                            loading="lazy"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </div>

                    <div>
                        <div className="mb-4">
                            <h3 className="text-[#63A1F2] text-xs font-medium uppercase">
                                Steps
                            </h3>
                        </div>

                        <div className="flex gap-x-5 ms-1">
                            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                <div className="relative z-10 size-8 flex justify-center items-center">
                                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#63A1F2] font-semibold text-xs uppercase rounded-full">
                                        1
                                    </span>
                                </div>
                            </div>

                            <div className="grow pt-0.5 pb-8 sm:pb-12">
                                <p className={`text-sm lg:${fontSizeClass} text-neutral-400 font-normal`}>
                                    <span className="text-white pr-[4px]">Contact: </span>
                                    Contact us by WhatsApp, email or form on the site to tell about your project and ask initial questions.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-x-5 ms-1">
                            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                <div className="relative z-10 size-8 flex justify-center items-center">
                                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#63A1F2] font-semibold text-xs uppercase rounded-full">
                                        2
                                    </span>
                                </div>
                            </div>

                            <div className="grow pt-0.5 pb-8 sm:pb-12">
                                <p className={`text-sm lg:${fontSizeClass} text-neutral-400 font-normal`}>
                                    <span className="text-white pr-[4px]">Analysis of the need: </span>
                                    We talk to understand your goals, requirements and expectations, ensuring that your solution meets exactly what you need.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-x-5 ms-1">
                            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                <div className="relative z-10 size-8 flex justify-center items-center">
                                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#63A1F2] font-semibold text-xs uppercase rounded-full">
                                        3
                                    </span>
                                </div>
                            </div>

                            <div className="grow pt-0.5 pb-8 sm:pb-12">
                                <p className={`text-sm lg:${fontSizeClass} text-neutral-400 font-normal`}>
                                    <span className="text-white pr-[4px]">Budget and Planning: </span>
                                    Based on the analysis, we sent a detailed budget with values, deadlines and project scope. After approval, we go to the planning.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-x-5 ms-1">
                            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                <div className="relative z-10 size-8 flex justify-center items-center">
                                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#63A1F2] font-semibold text-xs uppercase rounded-full">
                                        4
                                    </span>
                                </div>
                            </div>

                            <div className="grow pt-0.5 pb-8 sm:pb-12">
                                <p className={`text-sm lg:${fontSizeClass} text-neutral-400 font-normal`}>
                                    <span className="text-white pr-[4px]">Development and Adjustments: </span>
                                    We create your solution with transparency, keeping you up to date. We reviewed together and make necessary adjustments to ensure that everything is perfect.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-5 ms-1">
                            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                <div className="relative z-10 size-8 flex justify-center items-center">
                                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#63A1F2] font-semibold text-xs uppercase rounded-full">
                                        5
                                    </span>
                                </div>
                            </div>

                            <div className="grow pt-0.5 pb-8 sm:pb-12">
                                <p className={`text-sm lg:${fontSizeClass} text-neutral-400 font-normal`}>
                                    <span className="text-white pr-[4px]">Delivery and Support: </span>
                                    With everything approved, We throw the project and offer initial support to ensure that it works perfectly.
                                </p>
                            </div>
                        </div>

                        <button
                            className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#63A1F2] font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden"
                            onClick={() => scrollToSection("contact")}
                            to="contact"
                            smooth
                            duration={500}
                            offset={-70}
                            spy
                        >
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                <path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                                <path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path>
                            </svg>
                            Contact now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
