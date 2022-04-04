import styled from "styled-components";
import nftImage from "../img/image-equilibrium.jpg";
import view from "../img/icon-view.svg";

export default function NftImage() {
  return <Image />;
}

const Image = styled.div`
  background: url(${nftImage});
  background-size: contain;
  min-width: 300px;
  min-height: 300px;
  border-radius: 0.5rem;
  cursor: pointer;
  opacity: 1;
  

  &:hover {
    opacity: 0.5;
    background: url(${view}) no-repeat;
    background-position: center;
    background-color: rgb(0,255,255);
  }
`;
