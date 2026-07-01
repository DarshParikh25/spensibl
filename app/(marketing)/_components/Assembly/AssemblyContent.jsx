import TitlePill from "@/components/common/TitlePill";
import { CheckCircle } from "lucide-react";

const AssemblyContent = () => {
  const included = [
    "All accounts connected",
    "Transactions categorized",
    "Budgets on track",
    "Insights in real-time",
  ];

  return (
    <div className="flex flex-col justify-center items-start gap-6">
      <TitlePill>Everything in one place</TitlePill>

      <h2 className="text-section tracking-tighter leading-10 sm:leading-14 font-extrabold text-balance">
        Your Financial World, Assembled Beautifully.
      </h2>

      <p className="font-inter text-[1.05rem] text-(--muted2) leading-7 text-balance">
        {`We pull everything together so you don't have to juggle multiple apps and spreadsheets`}
      </p>

      <div>
        {included.map((content) => (
          <div
            key={content}
            className="font-inter flex items-center justify-baseline gap-4 mt-6"
          >
            <CheckCircle size={24} className="text-(--indigo)" />
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssemblyContent;
