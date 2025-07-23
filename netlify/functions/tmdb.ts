import axios from "axios";

export const handler = async (e) => {
  const { endpoint, type, query, id } = e.queryStringParameters;
  const base = "https://api.themoviedb.org/3";
  const apiKey = process.env.TMDB_API_KEY;

  let url = "";

  switch (endpoint) {
    case "popular":
      url = `${base}/${type}/popular?api_key=${apiKey}`;
      break;
    case "search_multi":
      url = `${base}/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
      break;
    case "search_movie":
      url = `${base}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
      break;
    case "search_tv":
      url = `${base}/search/tv?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
      break;
    case "details":
      url = `${base}/${type}/${id}?api_key=${apiKey}`;
      break;
    default:
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid endpoint" }),
      };
  }

  try {
    const { data } = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error: any) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        error: error.message || "Something went wrong",
      }),
    };
  }
};
