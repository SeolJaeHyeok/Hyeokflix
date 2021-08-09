import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { search } from "react-icons-kit/icomoon/search";
import { withBaseIcon } from "react-icons-kit";

const IconBlock = withBaseIcon({ size: 24, style: { color: "White" } });

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
  padding: 0px 10px;
`;

const HeaderList = styled.ul`
  margin-top: 10px;
  display: flex;
  float: left;
`;

const HeaderItem = styled.li`
  font-size: 16px;
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#eb2f06" : "transparent")};
  transition: ease-in-out 0.2s border-bottom;
`;

const RightHeader = styled.div`
  position: fixed;
  right: 0;
  padding-right: 25px;
  float: right;
  display: flex;
  font-size: 20px;
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
      <HeaderItem current={pathname === "/movie"}>
        <SLink to="/movie">Movies</SLink>
      </HeaderItem>
      <HeaderItem current={pathname === "/show"}>
        <SLink to="/show">TV</SLink>
      </HeaderItem>
      <RightHeader>
        <SLink to="/search">
          <IconBlock icon={search} />
        </SLink>
      </RightHeader>
    </HeaderList>
  </HeaderBlock>
);

export default withRouter(Header);
