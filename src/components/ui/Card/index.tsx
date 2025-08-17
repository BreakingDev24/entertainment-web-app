import { useLocation } from "react-router-dom";
import IconTypeMovie from "@/assets/icon-category-movie.svg?react";
import IconTypeTV from "@/assets/icon-category-tv.svg?react";
import cn from "@/utils/cn";

import BookmarkEmpty from "@/assets/icon-bookmark-empty.svg";
import BookmarkFull from "@/assets/icon-bookmark-full.svg";
import { useCardData } from "./useCardData";
import type { MediaItem } from "./types";
import { cardVariants } from "./cardStyles";

interface CardProps {
  item: MediaItem;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function Card({
  item,
  className,
  variant = "primary",
}: CardProps) {
  const {
    mediaType,
    isBookmarked,
    handleToggleBookmark,
    year,
    mediaTitle,
    imgUrl,
  } = useCardData(item, variant);
  const mediaTypeIcon =
    mediaType === "movie" ? <IconTypeMovie /> : <IconTypeTV />;
  const styles = cardVariants({ variant });
  return (
    <div className={cn(styles.root(), className)}>
      <img
        src={imgUrl}
        alt={`${mediaTitle} poster`}
        className={styles.poster()}
      />
      <div className={styles.content()}>
        <div className={styles.meta()}>
          <span>{year}</span>
          <span className={styles.typeLabel()}>
            {mediaTypeIcon}
            {mediaType}
          </span>
        </div>
        <h3
          title={mediaTitle}
          aria-label={mediaTitle}
          className={styles.title()}
        >
          {mediaTitle}
        </h3>
      </div>
      <button
        aria-pressed={isBookmarked}
        onClick={handleToggleBookmark}
        className={styles.bookmark()}
      >
        <img
          className="w-3"
          src={isBookmarked ? BookmarkFull : BookmarkEmpty}
          alt={isBookmarked ? "Bookmarked" : "Not bookmarked"}
        />
      </button>
    </div>
  );
}
