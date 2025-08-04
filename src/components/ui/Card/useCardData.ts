import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addBookmark, removeBookmark } from "@/features/bookmark/bookmark";
import type { MediaItem } from "./types";

export function useCardData(
  item: MediaItem,
  variant: "primary" | "secondary" = "primary",
) {
  const dispatch = useAppDispatch();

  const mediaType = item.media_type;
  const bookmarks = useAppSelector((state) =>
    mediaType === "movie" ? state.bookmark.movie : state.bookmark.tv,
  );

  const isBookmarked = bookmarks.some((el) => el.id === item.id);

  const handleToggleBookmark = () => {
    isBookmarked
      ? dispatch(removeBookmark({ id: item.id, media_type: mediaType }))
      : dispatch(addBookmark(item));
  };

  const mediaTitle =
    "title" in item ? item.title : "name" in item ? item.name : "Unknown";

  const year =
    "release_date" in item
      ? (item.release_date?.split("-")[0] ?? "N/A")
      : "first_air_date" in item
        ? (item.first_air_date?.split("-")[0] ?? "N/A")
        : "N/A";

  const imgType =
    variant === "secondary" ? item.backdrop_path : item.poster_path;
  const imgUrl = `https://image.tmdb.org/t/p/w342${imgType}`;

  return {
    mediaType,
    isBookmarked,
    handleToggleBookmark,
    year,
    mediaTitle,
    imgUrl,
  };
}
