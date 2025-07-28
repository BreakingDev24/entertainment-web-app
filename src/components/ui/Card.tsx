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
  const imgUrl = "https://image.tmdb.org/t/p/";

  const isMovie = item.media_type === "movie";
  const isTv = item.media_type === "tv";
  const year =
    item.media_type === "movie"
      ? item.release_date.split("-")[0]
      : item.first_air_date.split("-")[0];
  const mediaTitle = isMovie ? item.title : item.name;
  const mediaTypeIcon = isMovie ? <IconTypeMovie /> : <IconTypeTV />;
  const mediaTypeLabel = isMovie ? "movie" : "tv";

  return (
    <div className={cn("grid w-full justify-items-center gap-1.5", className)}>
      <img
        src={`${imgUrl}w342${item.poster_path}`}
        alt={`${mediaTitle} poster`}
        className="w-full"
      />
      <div className="flex w-full items-center justify-between">
        <span>{year}</span>
        <span className="ml-auto flex items-center gap-1.5">
          {mediaTypeIcon}
          {mediaTypeLabel}
        </span>
        <span></span>
      </div>
      <p>{mediaTitle}</p>
    </div>
  );
}
