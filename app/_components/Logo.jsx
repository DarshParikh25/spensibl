import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-sora font-extrabold text-xl lg:text-2xl tracking-tighter decoration-0 flex gap-0 items-center shrink-0"
    >
      <span className="text-(--text)">spen</span>
      <span className="bg-[linear-gradient(135deg,var(--indigo),var(--cyan))] bg-clip-text text-transparent">
        sibl
      </span>
      <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-linear-to-r from-(--indigo) to-(--cyan) self-start relative top-1 left-0.5"></span>
    </Link>
  );
};

export default Logo;
