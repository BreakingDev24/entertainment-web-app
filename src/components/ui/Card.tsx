import { useLocation } from "react-router-dom";
import IconTypeMovie from "../../assets/icon-category-movie.svg?react";
import IconTypeTV from "../../assets/icon-category-tv.svg?react";
import cn from "../../utils/cn";

export type MovieItem = {
  id: number;
  media_type: "movie";
  title: string;
  release_date: string;
  poster_path: string;
};

export type TVItem = {
  id: number;
  media_type: "tv";
  name: string;
  first_air_date: string;
  poster_path: string;
};

export type MediaItem = MovieItem | TVItem;

interface CardProps {
  item: MediaItem;
  className?: string;
}

export default function Card({ item, className }: CardProps) {
  const location = useLocation();
  const imgUrl = "https://image.tmdb.org/t/p/";
  const mediaType =
    item.media_type ||
    (location.pathname.includes("movies")
      ? "movie"
      : location.pathname.includes("tv")
        ? "tv"
        : "unknown");
  const isMovie = item.media_type === "movie";
  const isTv = item.media_type === "tv";
  const year =
    "release_date" in item
      ? (item.release_date?.split("-")[0] ?? "N/A")
      : "first_air_date" in item
        ? (item.first_air_date?.split("-")[0] ?? "N/A")
        : "N/A";
  const mediaTitle =
    "title" in item ? item.title : "name" in item ? item.name : "Unkonwn";
  const mediaTypeIcon =
    mediaType === "movie" ? <IconTypeMovie /> : <IconTypeTV />;

  return (
    <div
      className={cn(
        "grid w-full justify-items-center gap-1.5 text-white",
        className,
      )}
    >
      <img
        src={`${imgUrl}w342${item.poster_path}`}
        alt={`${mediaTitle} poster`}
        className="w-full"
      />
      <div className="text-preset6-mobile flex w-full items-center justify-between">
        <span>{year}</span>
        <span className="ml-auto flex items-center gap-1.5">
          {mediaTypeIcon}
          {mediaType}
        </span>
        <span></span>
      </div>
      <p className="text-preset4-mobile">{mediaTitle}</p>
    </div>
  );
}
