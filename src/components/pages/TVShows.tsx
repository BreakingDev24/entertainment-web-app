import { useGetPopularQuery } from "@/features/tmdb/tmdbApi";
import List from "@/components/common/List";
import Section from "../common/Section";

export default function TVShows() {
  const { data, isFetching } = useGetPopularQuery({ type: "tv" });
  return (
    <Section>
      <h2>Popular TV Shows</h2>
      {isFetching ? <p>Loading</p> : <List data={data} />}
    </Section>
  );
}
