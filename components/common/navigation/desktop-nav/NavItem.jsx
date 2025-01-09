/* eslint-disable react/prop-types */
import Link from "next/link";
import ArrowDown from "./ArrowDown";
function NavItem({ dropdown, title, children, url = "", extUrl }) {
  const urlFormated = url !== "/" ? `/${url}` : "/";

  return dropdown ? (
    <li className="nav-item nav-item-has-children">
      <a href="#" className="nav-link-item drop-trigger">
        {title} <ArrowDown />
      </a>
      {children}
    </li>
  ) : (
    <li className="nav-item">
      <Link
        {...(extUrl && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        href={extUrl ? extUrl : urlFormated}
        className="nav-link-item"
      >
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
