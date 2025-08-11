import { useGetPopularQuery } from "@/features/tmdb/tmdbApi";
import List from "@/components/common/List";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

export default function Movies() {
  const { data, isFetching } = useGetPopularQuery({ type: "movie" });
  return (
    <Section>
      <SectionTitle title="Popular Movies" />

      {isFetching ? <p>Loading</p> : <List data={data} />}
    </Section>
  );
}
