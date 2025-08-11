import { useAppSelector } from "@/app/hooks";
import List from "@/components/common/List";
import Section from "../common/Section";

export default function BookmarksPage() {
  const { movie, tv } = useAppSelector((state) => state.bookmark);
  return (
    <>
      <Section>
        <h2>Movie Bookmarks</h2>
        <List data={movie} />
      </Section>
      <Section>
        <h2>TV shows Bookmarks</h2>
        <List data={tv} />
      </Section>
    </>
  );
}
