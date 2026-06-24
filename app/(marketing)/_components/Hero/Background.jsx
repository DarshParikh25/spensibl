const Background = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-50 -left-50 w-175 h-175 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.13)_0%,transparent_70%)] animate-float1 -z-10"></div>
      <div className="absolute -bottom-25 -right-25 w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.1)_0%,transparent_70%)] animate-float2 -z-10"></div>
      <div className="absolute top-[40%] right-[25%] w-100 h-100 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.075)_0%,transparent_70%)] animate-float1 -z-10"></div>
      <div className="absolute inset-0 grid-lines bg-size-[64px_64px] -z-10"></div>
    </div>
  );
};

export default Background;
