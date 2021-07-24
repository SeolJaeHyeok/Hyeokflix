import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "c44bcd2c30bdd8361a44243773d49b6f",
    language: "en-US",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  trending: () => api.get(`trending/movie/week`),
  movieDetail: (movie_id) =>
    api.get(`movie/${movie_id}`, {
      params: {
        append_to_response: "videos,credits,similar,recommendations",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term), //특수문자나 스페이스 등을 인코딩 하는 과정이 꼭 필요!,
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  trending: () => api.get(`/trending/tv/week`),
  showDetail: (tv_id) =>
    api.get(`tv/${tv_id}`, {
      params: {
        append_to_response: "videos,credits,similar,recommendations",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term), // params를 query를 요구했는데 term을 정의해줘서 에러 발생!
      },
    }),
};

export const actorApi = {
  actorInformation: (credit_id) => api.get(`credit/${credit_id}`),
};

// export const multiSearchApi = {
//   multiSearch: (term) =>
//     api.get("search/multi", {
//       params: {
//         query: term,
//         include_adult: true,
//         page: 1,
//       },
//     }),
// };

// api.get("movie/508943/similar");
// api.get("movie/508943/reviews");
// api.get("search/tv");

export default api;
