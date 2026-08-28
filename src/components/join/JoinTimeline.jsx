import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const events = [
    { date: "Aug 23", title: "Campus-Wide Involvement Fair", time: "", location: "" },
    { date: "Aug 25", title: "Info Session I", time: "6:00 – 7:00 PM", location: "Houston Grove Room" },
    { date: "Aug 27", title: "Women in SIG", time: "6:00 – 7:00 PM", location: "Houston Grove Room" },
    { date: "Sep 1", title: "Technical + Resume Workshop", time: "7:00 – 8:00 PM", location: "Houston Grove Room" },
    { date: "Sep 3", title: "Info Session II", time: "7:00 – 8:00 PM", location: "Houston Grove Room" },
    { date: "Sep 4", title: "Round 1 Video Application Due", time: "Due by 11:59pm", location: "" },
    { date: "Sep 9", title: "Interviews Begin", time: "", location: "" },
];

export default function JoinTimeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-120px" });

    return (
        <section ref={ref} className="py-16">
            <div className="pb-16">
                <div className="max-w-6xl mx-auto px-6">
                    <a
                        href="https://forms.gle/vVHExcNcTtpd9bm28"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#7A1626] px-10 py-6 hover:bg-[#9E1B32] transition-colors duration-200"
                    >
                        <span className="font-secondary text-sm tracking-wide text-[#FFFFF0]/90">
                            Apply Now
                        </span>
                    </a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-2xl md:text-3xl font-light text-[#1F2933]"
                >
                    Recruitment Timeline
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="mt-2 max-w-2xl text-[#4B5563] italic leading-relaxed"
                >
                    Attending one recruitment event is required
                </motion.p>

                <div className="mt-10 space-y-6">
                    {events.map((event, index) => (
                        <motion.div
                            key={`${event.title}-${index}`}
                            initial={{ opacity: 0, y: 16 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 + index * 0.05 }}
                            className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#7A1626]/20 pb-6"
                        >
                            <div>
                                <div className="text-sm font-secondary tracking-wide text-[#9E1B32]">
                                    {event.date}
                                </div>
                                <div className="text-lg font-light text-[#1F2933] mt-1">
                                    {event.title}
                                </div>
                            </div>

                            <div className="mt-2 md:mt-0 text-sm text-[#4B5563]">
                                {[event.time, event.location].filter(Boolean).join(" · ")}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}