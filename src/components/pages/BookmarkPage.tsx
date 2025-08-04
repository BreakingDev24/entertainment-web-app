import { useAppSelector } from "@/app/hooks";
import List from "@/components/common/List";

export default function BookmarksPage() {
  const { movie, tv } = useAppSelector((state) => state.bookmark);
  return (
    <div className="text-white">
      <section>
        <h2>Movie Bookmarks</h2>
        <List data={movie} />
      </section>
      <section>
        <h2>TV shows Bookmarks</h2>
        <List data={tv} />
      </section>
    </div>
  );
}
