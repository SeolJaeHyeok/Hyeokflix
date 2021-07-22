import React, { useEffect, useState } from "react";
import SearchViewer from "components/Search/SearchViewer";
import { movieApi, tvApi } from "lib/api";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // TODO: updateTerm 함수 작성
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  handleSubmit = () => {
    if (searchTerm !== "") {
      searchByTerm(searchTerm);
    }
  };

  searchByTerm = async () => {
    try {
      setLoading(true);
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);

      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch (e) {
      setError("검색 결과를 찾을 수 없습니다.");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchViewer
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      error={error}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default SearchContainer;
