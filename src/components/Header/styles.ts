import styled from "styled-components";
import { HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/hi";
import { FaCarSide } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  max-height: 100px;

  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: grid;
  grid-template-columns: 1fr 1200px 1fr;
  grid-template-areas: "NA MA NE";
  position: relative;
`;

export const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  grid-area: MA;
  display: grid;
  grid-template-rows: 50px 50px;
  grid-template-columns: 0.6fr 2fr 1fr;
  grid-template-areas:
    "ML IA FC"
    "CI CT AO";
`;

export const CepArea = styled.div`
  grid-area: ML CI;
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: left;
  > img {
    width: 134px;
    margin-top: 10px;
    margin-bottom: 10px;
    :hover {
      cursor: pointer;
    }
  }

  > h1 {
    font-size: 13px;
    font-weight: 400;
    padding: 0px 0px 0px 0px;
  }
  > h3 {
    font-size: 12px;
    font-weight: 400;
    padding: 0px 0px 0px 0px;
    opacity: 0.5;
  }
`;

export const MapPin = styled(RiMapPinLine)`
  height: 22px;
  width: 18px;
  background-color: black;
  color: black;
`;

export const InputArea = styled.div`
  grid-area: IA;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  > div {
    margin-left: -43px;
    margin-top: 11px;
    border-left: 1px solid var(--color-border);

    :hover {
      cursor: pointer;
    }
  }

  > input {
    height: 38px;
    width: 598px;
    background: white;
    padding: 7px 60px 9px 15px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    margin-top: 10px;

    ::placeholder {
      opacity: 0.5;
      font-size: 14px;
    }
  }
`;

export const SearchIcon = styled(HiOutlineSearch)`
  width: 40px;
  margin-top: 3px;
  opacity: 0.8;
`;

export const Category = styled.div`
  grid-area: CT;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  > a {
    font-size: 13px;
    text-decoration: none;
    opacity: 0.5;
    color: black;
    transition: 0.3s;
    :hover {
      opacity: 0.9;
    }
    & + a {
      margin-left: 16.2px;
    }
  }
`;

export const AccountOptions = styled.div`
  grid-area: FC AO;
  display: grid;
  grid-template-rows: 50px 50px;
  grid-template-areas:
    "CP"
    "AO";
  padding: 10px 0px 10px 30px;

  .carpromo {
    grid-area: CP;
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-top: 10px;
    > h1 {
      font-size: 16px;
      font-weight: 400;
    }
    :hover {
      cursor: pointer;
    }
  }

  .account_options {
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 8px 0px 0px 0px;

    > a {
      font-size: 13px;
      text-decoration: none;
      opacity: 1;
      color: black;
      transition: 0.3s;
      & + a {
        margin-left: 10px;
      }
    }
  }
`;

export const CarIcon = styled(FaCarSide)`
  margin-right: 10px;
  width: 20px;
`;

export const ShoppingIcon = styled(HiOutlineShoppingCart)`
  font-size: 18px;
`;
