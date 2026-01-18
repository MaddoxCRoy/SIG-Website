export default function AboutWhatWeDo() {
    return (
        <section className="py-24 bg-[#FFFFF0]">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
                {/* Image Placeholder */}
                <div className="md:col-span-5">
                    <div className="aspect-[4/3] bg-[#E5E7EB]" />
                </div>

                {/* Text */}
                <div className="md:col-span-7">
                    <h2 className="text-2xl md:text-3xl font-light text-[#1F2933] mb-6">
                        What we do
                    </h2>
                    <p className="text-[#4B5563] leading-relaxed max-w-xl">
                        Members of SIG engage in applied investment research throughout the
                        semester, working in structured teams to analyze markets, evaluate
                        ideas, and contribute to shared portfolio discussions.

                        Work within SIG emphasizes preparation, communication, and judgment.
                        Members are expected to develop and defend their thinking, engage
                        with alternative viewpoints, and refine their ideas.

                    </p>
                </div>
            </div>
        </section>
    );
}
