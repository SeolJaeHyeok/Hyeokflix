import React from "react";
import reset from "styled-reset";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null, // id를 가지고 있다면 tv, movie 상관 없이 result를 가지게 만들기 위해
    error: null,
    loading: true,
  };

  render() {
    const { result, error, loading } = this.state; // object destructing
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
