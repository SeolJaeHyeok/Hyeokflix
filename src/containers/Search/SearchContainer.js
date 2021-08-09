import React, { useEffect, useState } from "react";
import SearchViewer from "components/Search/SearchViewer";
import { movieApi, multiSearchApi, tvApi } from "lib/api";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pastTerm, setPastTerm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      searchByTerm(searchTerm);
    }
    setSearchTerm("");
  };

  const updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };

  const searchByTerm = async () => {
    try {
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      const {
        data: { results: result },
      } = await multiSearchApi.multiSearch(searchTerm);

      setPastTerm(searchTerm);
      setLoading(true);
      setMovieResults(movieResults);
      setTvResults(tvResults);
      setResult(result);
    } catch (e) {
      setError("검색 결과를 찾을 수 없습니다.");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <SearchViewer
      result={result}
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      error={error}
      loading={loading}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
      pastTerm={pastTerm}
    />
  );
};

export default SearchContainer;
