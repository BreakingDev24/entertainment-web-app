import { useParams, useSearchParams } from "react-router-dom";
import { useSearchByTypeQuery } from "../../features/tmdb/tmdbApi";
import List from "../common/List";

export default function ResultPage() {
  console.log("ResultPage rendered");
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
  console.log(query, type);
  console.log(data);

  return (
    <div className="text-white">
      <h2>Results for: {query}</h2>
      {isFetching ? <p>Loading</p> : <List data={data} />}
    </div>
  );
}
