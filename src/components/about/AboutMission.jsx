export default function AboutMission() {
    return (
        <section className="py-24 bg-[#FFFFF0]">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-5">
                    <div className="aspect-square bg-[#E5E7EB]" />
                </div>

                <div className="md:col-span-7">
                    <h2 className="text-2xl md:text-3xl font-light text-[#1F2933] mb-6">
                        A student-run investment organization
                    </h2>
                    <p className="text-[#4B5563] leading-relaxed max-w-xl">
                        Scarlet Investment Group is a student-led organization at
                        The Ohio State University focused on developing rigorous,
                        research-driven investors. Our members engage in deep
                        fundamental analysis and systematic quantitative research
                        to better understand financial markets and investment risk.
                    </p>
                </div>
            </div>
        </section>
    );
}
