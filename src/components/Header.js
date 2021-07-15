import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const HeaderBlock = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const HeaderList = styled.ul`
  display: flex;
`;

const HeaderItem = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#eb2f06" : "transparent")};
  transition: ease-in-out 0.2s border-bottom;
`;

const SLink = styled(Link)`
  &.appName {
    margin-right: 15px;
    padding: 10px;
    /* background-color: #eb2f06; */
    font-size: 24px;
    font-weight: bold;
    font-family: "BMJUA";
    color: #eb2f06;
  }
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ location: { pathname } }) => (
  <HeaderBlock>
    <HeaderList>
      <SLink to="/" className="appName">
        Hyeokflix
      </SLink>
      <HeaderItem current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </HeaderItem>
      <HeaderItem current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </HeaderItem>
      <HeaderItem current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </HeaderItem>
    </HeaderList>
  </HeaderBlock>
);

export default withRouter(Header);
