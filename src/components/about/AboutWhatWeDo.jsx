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
                        Our Mission
                    </h2>
                    <p className="text-[#4B5563] leading-relaxed max-w-xl">
                        We aim to develop the next generation of investment professionals who lead with thoughtfulness.
                        SIG emphasizes the values of challenging assumptions, exploring nuance, and making disciplined decisions.

                    </p>
                </div>
            </div>
        </section>
    );
}
