import { useLocation } from "react-router-dom";
import IconTypeMovie from "../../assets/icon-category-movie.svg?react";
import IconTypeTV from "../../assets/icon-category-tv.svg?react";
import cn from "../../utils/cn";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addBookmark, removeBookmark } from "../../features/bookmark/bookmark";
import BookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import BookmarkFull from "../../assets/icon-bookmark-full.svg";

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
  const dispatch = useAppDispatch();
  const imgUrl = "https://image.tmdb.org/t/p/";
  const mediaType = item.media_type;

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
  const bookmarks = useAppSelector((state) =>
    item.media_type === "movie" ? state.bookmark.movie : state.bookmark.tv,
  );
  const isBookmarked = bookmarks.some((el) => el.id === item.id);
  const handleToggleBookmark = () => {
    if (isBookmarked)
      dispatch(removeBookmark({ id: item.id, media_type: item.media_type }));
    else dispatch(addBookmark(item));
    console.log("Bookmarks attuali:", bookmarks);
    console.log(mediaType);
  };
  return (
    <div
      className={cn(
        "relative grid w-full justify-items-center gap-1.5 text-white",
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
      </div>
      <p className="text-preset4-mobile">{mediaTitle}</p>
      <button
        onClick={handleToggleBookmark}
        className="bg-darkBlue absolute top-2 right-2 rounded-full p-2 opacity-50"
      >
        <img
          className="w-3"
          src={isBookmarked ? BookmarkFull : BookmarkEmpty}
          alt=""
        />
      </button>
    </div>
  );
}
