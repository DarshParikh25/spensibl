import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-xs lg:text-sm font-medium text-center text-muted whitespace-nowrap transition-all duration-300"
    >
      {children}
    </Link>
  );
};

export default NavLink;
