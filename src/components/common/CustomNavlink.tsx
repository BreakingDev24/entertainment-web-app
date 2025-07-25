import { NavLink, type NavLinkProps } from "react-router-dom";
import cn from "../../utils/cn";
interface CustomNavLinkProps extends NavLinkProps {}

export default function CustomNavLink({
  to,
  children,
  className,
  ...props
}: CustomNavLinkProps) {
  const styles = {
    active: "text-red",
    inactive: "text-lightBlue",
    base: "transition-colors duration-200",
  };

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(styles.base, isActive ? styles.active : styles.inactive, className)
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}
