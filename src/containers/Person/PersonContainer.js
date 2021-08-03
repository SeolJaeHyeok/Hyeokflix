import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PersonViewer from "components/Person/PersonViewer";
import { personApi } from "lib/api";

const PersonContainer = () => {
  const params = useParams();
  const parsedId = parseInt(params.id); // Person ID

  const [result, setResults] = useState([]);
  const [movieResults, setMovieResults] = useState([]);
  const [showResults, setShowResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPersonFromApi = async () => {
    try {
      const { data: result } = await personApi.personInformation(parsedId);
      const { data: movieResults } = await personApi.personMovies(parsedId);
      const { data: showResults } = await personApi.personShows(parsedId);
      setResults(result);
      setMovieResults(movieResults);
      setShowResults(showResults);
    } catch (e) {
      setError("인물 정보를 찾을 수 없습니다.");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPersonFromApi();
  }, []);

  return (
    <PersonViewer
      result={result}
      movieResults={movieResults}
      showResults={showResults}
      error={error}
      loading={loading}
    />
  );
};

export default PersonContainer;
