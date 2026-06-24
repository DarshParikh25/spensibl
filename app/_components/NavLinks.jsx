import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-center text-muted whitespace-nowrap transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

export default NavLink;
