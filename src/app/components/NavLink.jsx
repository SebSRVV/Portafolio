import Link from "next/link";

const NavLink = ({ href, title, className = "" }) => {
  return (
    <Link
      href={href}
      className={`relative inline-block px-2 py-1 text-white hover:text-emerald-400 transition-colors duration-300 ${className}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
