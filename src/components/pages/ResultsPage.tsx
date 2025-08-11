import { useParams, useSearchParams } from "react-router-dom";
import { useSearchByTypeQuery } from "@/features/tmdb/tmdbApi";
import List from "@/components/common/List";
import Section from "../common/Section";

export default function ResultPage() {
  const { section } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const type =
    section === "tv" ? "tv" : section === "movies" ? "movie" : "multi";
  const { data, isFetching } = useSearchByTypeQuery(
    {
      type,
      query: query ?? "",
    },
    { skip: !query },
  );

  return (
    <Section>
      <h2>Results for: {query}</h2>
      {isFetching ? <p>Loading</p> : <List data={data} />}
    </Section>
  );
}
