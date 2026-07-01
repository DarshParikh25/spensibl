import AssemblyContent from "./AssemblyContent";

const Assembly = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-16 overflow-hidden">
      <div className="max-w-300 relative z-10 my-0 mx-auto py-20 px-10 items-center grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Content */}
        <AssemblyContent />

        {/* Visual */}
      </div>
    </section>
  );
};

export default Assembly;
