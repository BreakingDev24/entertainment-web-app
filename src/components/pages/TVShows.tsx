import { useGetPopularQuery } from "@/features/tmdb/tmdbApi";
import List from "@/components/common/List";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

export default function TVShows() {
  const { data, isFetching } = useGetPopularQuery({ type: "tv" });
  return (
    <Section>
      <SectionTitle title="Popular TV Shows" />

      {isFetching ? <p>Loading</p> : <List data={data} />}
    </Section>
  );
}
