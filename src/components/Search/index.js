import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Audio } from "react-loader-spinner";
import CardList from "../CardList";
import apiKey from "../api";
import "./index.css";

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      setPageData(data);
      setIsLoading(false);
      console.log(data);
    };

    getData();
  }, [page]);
  return (
    <>
      {isLoading ? (
        <Audio />
      ) : (
        <CardList pageData={pageData} setPage={setPage} />
      )}
    </>
  );
};

export default Search;
