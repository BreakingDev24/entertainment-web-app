import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { MovieItem, TVItem } from "@/components/ui/Card/types";

interface BookmarkState {
  movie: MovieItem[];
  tv: TVItem[];
}

type BookmarkPayload = MovieItem | TVItem;

const initialState: BookmarkState = {
  movie: [],
  tv: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark(state, action: PayloadAction<BookmarkPayload>) {
      const item = action.payload;
      if (item.media_type === "movie") {
        if (!state.movie.some((el) => el.id === item.id)) {
          state.movie.push(item);
        }
      }
      if (item.media_type === "tv") {
        if (!state.tv.some((el) => el.id === item.id)) {
          state.tv.push(item);
        }
      }
    },
    removeBookmark(
      state,
      action: PayloadAction<{ id: number; media_type: "movie" | "tv" }>,
    ) {
      const { id, media_type } = action.payload;
      if (media_type === "movie")
        state.movie = state.movie.filter((item) => item.id !== id);
      if (media_type === "tv")
        state.tv = state.tv.filter((item) => item.id !== id);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
