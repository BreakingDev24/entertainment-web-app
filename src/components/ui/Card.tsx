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
  imgUrl: string;
  className?: string;
}

export default function Card({ item, imgUrl, className }: CardProps) {
  const isMovie = item.media_type === "movie";
  const isTv = item.media_type === "tv";
  const year =
    item.media_type === "movie"
      ? item.release_date.split("-")[0]
      : item.first_air_date.split("-")[0];
  const mediaTitle = isMovie ? item.title : item.name;

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
          {isMovie ? <IconTypeMovie /> : <IconTypeTV />}
          {isMovie ? "movie" : "tv"}
        </span>
        <span></span>
      </div>
      <p>{mediaTitle}</p>
    </div>
  );
}
