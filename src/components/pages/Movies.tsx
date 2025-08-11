import { useGetPopularQuery } from "@/features/tmdb/tmdbApi";
import List from "@/components/common/List";
import Section from "../common/Section";

export default function Movies() {
  const { data, isFetching } = useGetPopularQuery({ type: "movie" });
  return (
    <Section>
      <h2>Popular movie</h2>
      {isFetching ? <p>Loading</p> : <List data={data} />}
    </Section>
  );
}
