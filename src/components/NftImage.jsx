import styled from "styled-components";
import nftImage from "../img/image-equilibrium.jpg";
import view from "../img/icon-view.svg";

export default function NftImage() {
  return (
    <Image>
      <Icon />
    </Image>
  );
}

const Image = styled.div`
  background: url(${nftImage});
  background-size: contain;
  min-width: 300px;
  min-height: 300px;
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;
`;

const Icon = styled.div`
  background: url(${view}) no-repeat;
  background-position: center;
  background-size: 50px 50px;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 300px;
  min-height: 300px;
  border-radius: 0.5rem;
  opacity: 0;
  transition: 0.5s ease;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 255, 255, 0.4);
  }
`;
