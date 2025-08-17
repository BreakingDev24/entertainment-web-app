import cn from "@/utils/cn";
import Logo from "@/assets/logo.svg?react";
import IconHome from "@/assets/icon-nav-home.svg?react";
import IconMovies from "@/assets/icon-nav-movies.svg?react";
import IconTvSeries from "@/assets/icon-nav-tv-series.svg?react";
import IconBookmark from "@/assets/icon-nav-bookmark.svg?react";
import ImageAvatar from "@/assets/image-avatar.png";
import CustomNavLink from "@/components/ui/CustomNavlink";

interface NavProps {
  className?: string;
}
export default function Navbar({ className }: NavProps) {
  return (
    <div
      className={cn(
        "bg-mediumBlue flex items-center justify-between p-4 lg:h-full lg:flex-col lg:justify-start lg:gap-8",
        className,
      )}
    >
      <div>
        <Logo />
      </div>
      <nav className="flex gap-6 lg:flex-col">
        <CustomNavLink to="/" className="text-white">
          <IconHome />
        </CustomNavLink>
        <CustomNavLink to="/movies">
          <IconMovies />
        </CustomNavLink>
        <CustomNavLink to="/tv">
          <IconTvSeries />
        </CustomNavLink>
        <CustomNavLink to="/bookmark">
          <IconBookmark />
        </CustomNavLink>
      </nav>

      <div className="mt-auto">
        <img src={ImageAvatar} alt="avatar" className="w-6" />
      </div>
    </div>
  );
}
