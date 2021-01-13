import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  nowPlaying,
  popular,
  upComing,
  error,
  loading,
  handleSubmit,
}) => null;

SearchPresenter.PropTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.String,
  error: PropTypes.String,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;
