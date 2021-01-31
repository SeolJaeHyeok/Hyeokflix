import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  //Class로 만들어서 사용
  constructor(props) {
    super(props);

    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null, // id를 가지고 있다면 tv, movie 상관 없이 result를 가지게 만들기 위해
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      // 클래스를 만들어 state에 집어넣는 방법 = componentDidMount 내에서 this.isMovie로 정의하는 방법 => 두 가지 모두 클래스 전체에서 사용할 수 있게끔 해주는 방법
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }, // URL에서 id를 얻기 위해 props를 통해 id값에 접근
      },
      history: { push }, // string이 입력됐을 때 Home화면으로 push하기 위해
    } = this.props;

    const { isMovie } = this.state; // class 안의 isMovie
    const parsedId = parseInt(id); // string인 URL의 ID를 number로 변환

    if (isNaN(parsedId)) {
      return push("/"); //ID가 number가 아니면 Home화면으로 Push
    }

    let result = null;
    try {
      if (isMovie) {
        // movieDetail Api 호출을 하고 그 안에 있는 data에 접근
        // const request = await moviesApi.movieDetail(parsedId);
        // result = request.data;
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        // showDetail Api 호출을 하고 그 안에 있는 data에 접근
        // const request = await tvApi.showDetail(parsedId);
        // result = request.data;
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state; // object destructing
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
