const TitlePill = ({ children }) => {
  return (
    <div className="w-fit uppercase inline-flex justify-center items-center border border-(--border2) rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-inter gap-2 text-(--cyan) bg-[rgba(99, 102, 241, 0.07)] font-semibold tracking-wider">
      {/* Hero Dot */}
      <span className="inline-flex w-1.25 h-1.25 bg-(--cyan) rounded-full animate-blink"></span>
      {children}
    </div>
  );
};

export default TitlePill;
