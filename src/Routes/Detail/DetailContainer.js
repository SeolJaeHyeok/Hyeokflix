import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null, // id를 가지고 있다면 tv, movie 상관 없이 result를 가지게 만들기 위해
    error: null,
    loading: true,
  };
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push }, // string이 입력됐을 때 Home화면으로 push하기 위해
    } = this.props;
    const parsedId = parseInt(id); // string인 URL의 ID를 number로 변환
    if (isNaN(parsedId)) {
      return push("/"); //ID가 number가 아니면 Home화면으로 Push
    }
  }
  render() {
    const { result, error, loading } = this.state; // object destructing
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
