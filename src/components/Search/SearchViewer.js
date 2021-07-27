import React from "react";
import styled from "styled-components";

import Loader from "components/common/Loader";
import Section from "components/common/Section";
import Message from "components/common/Message";

const SearchBlock = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchResultBlock = styled.div`
  font-size: 28px;
  color: #f1c40f;
  margin-bottom: 30px;
`;

const SearchViewer = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
  pastTerm,
}) => (
  <SearchBlock>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="검색하고 싶은 영화 또는 TV 시리즈를 입력하세요."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {pastTerm && movieResults.length > 0 && tvResults.length > 0 && (
          <SearchResultBlock>{pastTerm}에 대한 검색 결과</SearchResultBlock>
        )}
        {movieResults && movieResults.length > 0 && (
          <Section title="Movies">
            {movieResults.map((movie) => movie.title)}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Shows">
            {tvResults.map((show) => show.name)}
          </Section>
        )}
      </>
    )}
    {error && <Message color="#e74c3c" text={error} />}
    {pastTerm &&
      movieResults &&
      tvResults &&
      movieResults.length === 0 &&
      tvResults.length === 0 && (
        <Message
          text={`${pastTerm}에 대한 검색 결과를 찾을 수 없습니다.`}
          color="#95a5a6"
        />
      )}
  </SearchBlock>
);

export default SearchViewer;
