export default function ResearchJournalDisclosure() {
  return (
    <section className="py-16 bg-[#FFFFF0]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Divider — SAME WIDTH SYSTEM AS FOOTER */}
        <div className="border-t border-[#7A1626]/20 mb-6" />

        {/* Legal text */}
        <p className="text-xs leading-relaxed text-[#6B7280]">
          The SIG Research Journal is published for educational and informational purposes only.
          The analyses, opinions, and views expressed herein are those of the individual authors
          and do not constitute investment advice, a recommendation, or an offer to buy or sell
          any security.
        </p>

        <p className="mt-4 text-xs leading-relaxed text-[#6B7280]">
          Scarlet Investment Group and its members make no representations as to the accuracy
          or completeness of the information contained in this publication and assume no
          responsibility for any investment decisions made based on its content.
        </p>

      </div>
    </section>
  );
}
