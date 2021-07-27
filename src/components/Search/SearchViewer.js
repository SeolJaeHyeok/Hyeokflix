import Loader from "components/common/Loader";
import Section from "components/common/Section";
import React from "react";
import styled from "styled-components";

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

const SearchResultBlock = styled.div``;

const SearchViewer = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
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
  </SearchBlock>
);

export default SearchViewer;
