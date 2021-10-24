import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "../../lib/api";
import { useParams, withRouter } from "react-router";
import DetailViewer from "components/Detail/DetailViewer";

const DetailContainer = ({ match, location, history }) => {
  const params = useParams();
  const { pathname } = location;

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMovie, setIsMovie] = useState(null);

  const getDetailDataFromApi = async () => {
    const parsedId = parseInt(params.id);

    if (isNaN(parsedId)) {
      return history.push("/");
    }

    {
      /* 
    Moive API와 TV API를 구별해서 받아오는게 안되는 중
    isMovie 변수가 제대로 변경되지 않고 있음
    저번에 디버깅 했을 때는 Movie, TV 전부 다 제대로 받아왔는데 갑자기 안되네.. 
    그 외의 기능은 문제 없이 실행되고 있음
    추후에 이 부분 디버깅 필요!!
  */
    }

    let result = null;
    setIsMovie(pathname.includes("/movie/"));
    // console.log(isMovie);
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
      setResult(result);
    } catch {
      setError("데이터를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetailDataFromApi();
  }, []);
  return <DetailViewer result={result} error={error} loading={loading} />;
};

export default withRouter(DetailContainer);
