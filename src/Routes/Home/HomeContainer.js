import { moviesApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upComing },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upComing,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find the Moive Infomation.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state; // object destructing
    console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
