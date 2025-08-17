import { useState } from "react";
import IconSearch from "@/assets/icon-search.svg?react";
import { useLocation, useNavigate } from "react-router-dom";
import cn from "@/utils/cn";

interface FormProps {
  className?: string;
}

export default function SearchForm({ className }: FormProps) {
  const [input, setInput] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const path = location.pathname;
    const params = new URLSearchParams({ query: input });
    let basePath = "/results";
    if (path.includes("/movies")) basePath = "/movies/results";
    if (path.includes("/tv")) basePath = "/tv/results";

    navigate(`${basePath}?${params.toString()}`);
  };
  const getPlaceholder = () => {
    if (location.pathname === "/movies") return "Search for movies";
    if (location.pathname === "/tv") return "Search for TV shows";
    return "Search for movies or TV series";
  };
  return (
    <div className={cn(className)}>
      <form action="" onSubmit={handleSubmit} className="flex">
        <button>
          <IconSearch />
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={getPlaceholder()}
          className="text-preset2-mobile flex-1 text-white placeholder-gray-300"
        />
      </form>
    </div>
  );
}
